// Review Desk static demo: the rules of the review queue, in the browser.
// A simulation: it mirrors src/review/queue.py and the app's safety rules, and writes nothing anywhere.
(function (root) {
  const NAME_MSG = 'Type your name first. Every step is logged with who did it.';
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const err = (error, status) => ({ ok: false, error, status: status || 400 });
  const money = (c) => '$' + (c / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const stamp = () => new Date().toISOString().slice(0, 16).replace('T', ' ');

  function init(snap) {
    const items = {};
    snap.items.forEach((i) => { items[i.id] = { status: i.status, stripe_status: 'none', note: '', edited: false, amounts: null, log: [] }; });
    return { items };
  }
  const find = (snap, id) => snap.items.find((i) => i.id === id);
  const note = (s, id, by, event) => s.items[id].log.push({ at: stamp(), actor: by, event });

  function apply(s, snap, id, by, batch) {
    const it = find(snap, id);
    note(s, id, by, 'approved');
    note(s, id, 'system', 'ledger applied (demo copy)');
    s.items[id].status = 'applied';
    s.items[id].stripe_status = it.has_stripe ? 'todo' : 'none';
    if (it.has_stripe) note(s, id, 'system', 'stripe to-do created');
  }

  function act(snap, state, action, a) {
    const s = clone(state);
    a = a || {};
    const by = (a.by || '').trim();
    if (action !== 'reset' && !by) return err(NAME_MSG);
    const it = a.id ? find(snap, a.id) : null;
    const cur = a.id ? s.items[a.id] : null;
    if (a.id && !it) return err('No item ' + a.id + '.', 404);
    const text = (a.note || '').trim();
    switch (action) {
      case 'approve': {
        if (cur.status !== 'waiting') return err(a.id + ' is ' + cur.status + ', not waiting, so it cannot be approved.', 409);
        if (it.risky) { cur.status = 'second_look'; note(s, a.id, by, 'second look started'); return { ok: true, state: s, message: 'First look recorded. Check the details, then confirm.', to: a.id }; }
        apply(s, snap, a.id, by);
        return { ok: true, state: s, message: 'Approved. The change is in the demo ledger and logged.', to: a.id };
      }
      case 'confirm': {
        if (cur.status !== 'second_look') return err(a.id + ' is ' + cur.status + ', not in the second look.', 409);
        if (!a.checked) return err('Tick the box to say you checked, then confirm.');
        note(s, a.id, by, 'second look confirmed');
        apply(s, snap, a.id, by);
        return { ok: true, state: s, message: 'Confirmed and approved.', to: a.id };
      }
      case 'sendBack': {
        if (cur.status !== 'second_look') return err(a.id + ' is ' + cur.status + ', not in the second look.', 409);
        if (!text) return err('A short note is required here, so the log says why.');
        cur.status = 'waiting'; cur.note = text; note(s, a.id, by, 'second look returned');
        return { ok: true, state: s, message: 'Sent back with your note.', to: a.id };
      }
      case 'reject': {
        if (!['waiting', 'second_look', 'needs_person'].includes(cur.status)) return err(a.id + ' is ' + cur.status + ' and cannot be rejected.', 409);
        if (!text) return err('A short note is required here, so the log says why.');
        cur.status = 'rejected'; cur.note = text; note(s, a.id, by, 'rejected');
        return { ok: true, state: s, message: 'Rejected. Nothing was written.', to: a.id };
      }
      case 'handled': {
        if (cur.status !== 'needs_person') return err(a.id + ' is ' + cur.status + ', not waiting for a person.', 409);
        if (!text) return err('A short note is required here, so the log says why.');
        cur.status = 'handled'; cur.note = text; note(s, a.id, by, 'handled');
        return { ok: true, state: s, message: 'Marked as handled.', to: a.id };
      }
      case 'stripeDone': {
        if (cur.status !== 'applied' || cur.stripe_status !== 'todo') return err(a.id + ' has no approved Stripe action waiting to be done.', 409);
        cur.stripe_status = 'done'; note(s, a.id, by, 'stripe step done by hand');
        return { ok: true, state: s, message: 'Stripe step recorded.', to: a.id };
      }
      case 'approveReady': {
        // The rules choose the items. Any ids in the request are ignored: plain waiting items only.
        const ids = snap.items.filter((i) => s.items[i.id].status === 'waiting' && !i.risky).map((i) => i.id);
        ids.forEach((id) => apply(s, snap, id, by));
        return { ok: true, state: s, message: 'Approved ' + ids.length + ' ready items. Risky items were not included.', applied: ids.length };
      }
      case 'edit': {
        if (!['waiting', 'needs_person'].includes(cur.status)) return err(a.id + ' is ' + cur.status + ' and can no longer be edited.', 409);
        if (!text) return err('A short note is required: say why you are editing.');
        const ledger = a.ledger || [], stripe = a.stripe || [];
        for (let n = 0; n < it.ledger_fixes.length; n++) {
          const c = ledger[n];
          if (!Number.isInteger(c) || c < 0) return err('Type a valid amount.');
          if (it.ledger_fixes[n].action === 'record_refund' && c > it.payment_cents) return err('A refund of ' + money(c) + ' is larger than the payment of ' + money(it.payment_cents) + '.');
        }
        for (let n = 0; n < it.stripe_fixes.length; n++) if (!Number.isInteger(stripe[n]) || stripe[n] < 0) return err('Type a valid amount.');
        cur.edited = true; cur.amounts = { ledger, stripe }; note(s, a.id, by, 'proposal edited (original kept)');
        return { ok: true, state: s, message: "Edit saved. The AI's original is kept.", to: a.id };
      }
      default:
        return err('Unknown action.', 404);
    }
  }

  // Escape first, then highlight amounts and ids. Long Stripe ids are shortened to ch_...abcd.
  function rich(text) {
    const safe = String(text == null ? '' : text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    return safe.replace(/(\$[\d,]+(?:\.\d+)?|INV-\d+|ch_[A-Za-z0-9]{8,}|po_[A-Za-z0-9]{8,}|pi_[A-Za-z0-9]{8,})/g, (t) => '<span class="mono v">' + (t.includes('_') ? t.split('_')[0] + '_\u2026' + t.slice(-4) : t) + '</span>');
  }
  const unapprovedWrites = (state) => Object.values(state.items).filter((i) => i.status === 'applied' && !i.log.some((e) => e.event === 'approved')).length;
  const api = { init, act, unapprovedWrites, money, rich };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.DemoCore = api;
})(typeof window !== 'undefined' ? window : globalThis);
