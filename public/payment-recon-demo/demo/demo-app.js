// Review Desk static demo: draws the screens from the snapshot and the rules in demo-core.js.
(function () {
  const KEY = 'reviewdesk-demo-v1';
  const app = document.getElementById('app');
  let snap = null, state = null, who = '', flash = null, flashBad = false, show = 'all';

  const esc = (t) => String(t == null ? '' : t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const money = DemoCore.money;
  const ORDER = { you: 0, money: 1, look: 2, ready: 3, done: 4 };

  function load() { try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify({ state, who })); } catch (e) { /* the demo still works without storage */ } }

  const statusOf = (i) => state.items[i.id].status;
  function lane(i) {
    const st = statusOf(i);
    if (['applied', 'rejected', 'handled'].includes(st)) return 'done';
    if (st === 'needs_person') return 'you';
    if (st === 'second_look' || i.has_stripe) return 'money';
    return i.risky ? 'look' : 'ready';
  }

  function queueHtml(sel) {
    const rows = snap.items.map((i) => ({ i, l: lane(i) }));
    const cnt = (f) => rows.filter(f).length;
    const open = cnt((r) => r.l !== 'done');
    const shown = rows.filter((r) => ({ all: r.l !== 'done', ready: r.l === 'ready', risky: r.l === 'money' || r.l === 'look', you: r.l === 'you', done: r.l === 'done' }[show] ?? true));
    if (show === 'all') shown.sort((a, b) => ORDER[a.l] - ORDER[b.l] || a.i.id.localeCompare(b.i.id));
    const chip = (k, cls, label) => `<a class="chip ${show === k ? 'c-dark' : cls}" href="#/queue?show=${k}">${label}</a>`;
    const ready = cnt((r) => r.l === 'ready');
    return `<aside class="side" id="queue"><div class="side-head"><a class="k" href="#/" style="text-decoration:underline">Overview</a>
      <div style="display:flex;align-items:baseline;justify-content:space-between"><h2 style="font-size:18px">${open} waiting</h2><span class="k">${cnt((r) => r.l === 'you')} need you</span></div>
      <div class="actions" style="gap:6px">${chip('all', 'c-plain', 'All')}${chip('ready', 'c-ready', 'Ready ' + ready)}${chip('risky', 'c-money', 'Risky ' + cnt((r) => r.l === 'money' || r.l === 'look'))}${chip('you', 'c-you', 'Needs you ' + cnt((r) => r.l === 'you'))}${chip('done', 'c-plain', 'Done ' + cnt((r) => r.l === 'done'))}</div></div>
      <div class="card list">${shown.map((r) => `<a class="row ${r.i.id === sel ? 'sel' : ''}" href="#/items/${esc(r.i.id)}?show=${esc(show)}"><span class="dot d-${r.l}"></span><span class="v">${esc(r.l === 'you' ? r.i.short_title : r.i.title)}</span>${r.l === 'you' ? '<span class="chip c-you">You</span>' : `<span class="mono k">${esc(r.i.amount)}</span>`}</a>`).join('') || '<p class="k" style="padding:12px">Nothing here.</p>'}</div>
      ${who && ready ? `<button class="btn btn-quiet" data-act="approveReady" style="padding-left:4px" title="Approves the ready items only. Risky items are never included. Each is still logged.">Approve all ${ready} ready items</button>` : ''}
    </aside>`;
  }

  const nameGate = () => `<form data-form="name" class="f" style="max-width:360px"><label class="k" for="name">Your name (goes in the demo log)</label><div class="actions"><input id="name" class="in" name="name" required style="flex:1"><button class="btn btn-primary" type="submit" style="min-height:46px;padding:11px 20px;font-size:15px">Continue</button></div></form>`;
  const how = `<details><summary style="padding:0;font-weight:500;color:#55656f;justify-content:flex-start;gap:8px;font-size:14px">Step 4 of 5: you decide. The AI only suggests. <span style="color:#0b6e8a;font-weight:600;text-decoration:underline">How this works</span></summary>
    <ol class="steps"><li><div class="bar on"></div><div class="v" style="margin-top:6px">1 Payment arrives</div></li><li><div class="bar on"></div><div class="v" style="margin-top:6px">2 Rules check it</div></li><li><div class="bar on"></div><div class="v" style="margin-top:6px">3 AI investigates</div></li><li><div class="bar now"></div><div class="v" style="margin-top:6px;color:#0b6e8a">4 You decide</div></li><li><div class="bar"></div><div class="v" style="margin-top:6px">5 Written to the ledger</div></li></ol></details>`;

  function folds(i) {
    const log = state.items[i.id].log;
    return `<section class="card fold">
      <details><summary>Why the AI thinks so</summary><div style="padding-bottom:18px;display:flex;flex-direction:column;gap:12px"><div><span class="eyebrow">In short</span><p style="margin-top:4px;font-weight:600">${esc(i.summary)}</p></div>
        ${i.points.length ? `<div><span class="eyebrow">What the AI noticed</span><ol class="points">${i.points.map((pt) => `<li>${DemoCore.rich(pt)}</li>`).join('')}</ol></div>` : '<p class="k">No reasoning was recorded.</p>'}
        ${i.note && i.status !== 'needs_person' ? `<div><span class="eyebrow">Why one side needs nothing</span><p style="margin-top:4px">${DemoCore.rich(i.note)}</p></div>` : ''}</div></details><div class="sep"></div>
      <details><summary>Evidence</summary><div style="padding-bottom:16px"><dl class="facts-grid">${i.payment_facts.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}<div><dt>Invoice chosen</dt><dd class="mono">${esc(i.invoice || 'none')}</dd></div></dl>${i.fix_lines.map((l) => `<p style="margin-top:8px"><span class="k">Suggested</span> ${esc(l)}</p>`).join('')}</div></details>
      ${i.warnings.length ? `<div class="sep"></div><details><summary>Text in the payment was ignored <span class="chip c-look" style="margin-left:auto;margin-right:6px">${i.warnings.length} warning${i.warnings.length === 1 ? '' : 's'}</span></summary><div style="padding-bottom:16px;display:flex;flex-direction:column;gap:8px">${i.warnings.map((w) => `<p class="quote mono">${esc(w)}</p>`).join('')}<p class="k">Text in a payment is treated as data, never as an instruction.</p></div></details>` : ''}
      <div class="sep"></div>
      <details><summary>History</summary><div style="padding-bottom:16px;display:grid;gap:6px;font-size:14px">${log.map((h) => `<div style="display:grid;grid-template-columns:150px minmax(0,1fr);gap:12px"><span class="mono k">${esc(h.at)}</span><span><strong>${esc(h.actor)}</strong> ${esc(h.event)}</span></div>`).join('') || '<p class="k">Nothing yet.</p>'}<p class="k">In the real app, every step is logged and the log cannot be edited or deleted.</p></div></details>
    </section>`;
  }

  function itemHtml(i) {
    const st = state.items[i.id], l = lane(i), conf = i.confidence ? `<span class="chip c-ai" title="How sure the AI is. High means it found the records and the amounts add up.">AI confidence: ${esc(i.confidence)}</span>` : '';
    const ba = i.before_after ? `<div class="ba"><span class="k">${esc(i.before_after.label)}</span><span class="mono" style="font-size:22px;color:#55656f">${esc(i.before_after.before)}</span><span class="k">to</span><span class="mono v" style="font-size:26px;color:#14633d">${esc(i.before_after.after)}</span></div>` : '';
    let body;
    if (st.status === 'second_look') {
      body = `<section class="card pad warn-card"><div class="actions" style="gap:8px"><span class="chip c-money">Moves money: second look</span>${conf}</div>
        <div><h2 class="h-big">${esc(i.title)}</h2><p class="lead">${esc(i.summary)} This is real money or a real change, so check these things.</p></div>
        <ul class="facts">${i.facts.map((f) => `<li><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><circle cx="11" cy="11" r="10" fill="#fbe3df"/><path d="M6.5 11.4l3 3 6-6.4" fill="none" stroke="#a02f24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${esc(f)}</span></li>`).join('')}</ul>
        ${i.risk_reasons.map((r) => `<p class="k">Why a second look: ${esc(r)}</p>`).join('')}
        ${who ? `<form data-form="confirm" data-id="${esc(i.id)}" class="actions" style="background:#fff8f7;border:1px solid #efc3bd;border-radius:12px;padding:14px 16px;gap:14px"><label style="display:flex;align-items:center;gap:10px;font-weight:600"><input type="checkbox" name="confirmed" style="width:20px;height:20px">I checked these things</label><button class="btn btn-primary" type="submit" style="min-height:48px;padding:11px 26px;font-size:15px">Confirm and approve</button></form>
        <details><summary>Not sure? Send it back</summary><form data-form="sendBack" data-id="${esc(i.id)}" class="f"><label class="k" for="sb">Say why (required)</label><textarea id="sb" name="note" rows="2" class="in"></textarea><div class="actions"><button class="btn" type="submit">Send back with my note</button></div></form></details>` : nameGate()}
        ${i.stripe_todo ? `<p class="k">After you confirm: ${esc(i.stripe_todo)} in Stripe yourself, then tick it off here. The real Review Desk never acts in Stripe.</p>` : ''}</section>`;
    } else if (st.status === 'needs_person') {
      body = `<section class="card pad you-card"><div class="actions" style="gap:8px"><span class="chip c-you">Needs you</span><span class="chip c-ai" title="The AI is sure a person must decide. It did not guess.">The AI stopped on purpose</span></div>
        <div><h2 class="h-big">${esc(i.title)}</h2><p class="lead">${esc(i.summary)}</p></div>
        <div style="overflow-x:auto"><table><tbody><tr><td class="v">Who paid</td><td>${esc(i.payer)}</td></tr><tr><td class="v">Email</td><td class="mono">${esc(i.payer_email)}</td></tr><tr><td class="v">Amount</td><td class="mono">${esc(i.payment_amount)}</td></tr></tbody></table></div>
        ${who ? `<form data-form="handled" data-id="${esc(i.id)}" class="f"><label class="k" for="hn">Once you have checked, say what you did (required)</label><textarea id="hn" name="note" rows="3" class="in"></textarea><div class="actions"><button class="btn btn-you" type="submit">Mark as handled</button></div></form>` : nameGate()}</section>`;
    } else if (st.status === 'waiting') {
      const cls = l === 'ready' ? 'c-ready' : l === 'look' ? 'c-look' : 'c-money', lab = { ready: 'Ready', look: 'Look closer', money: 'Moves money: needs a second look' }[l];
      body = `<section class="card pad"><div class="actions" style="gap:8px"><span class="chip ${cls}">${lab}</span>${conf}${st.edited ? '<span class="chip c-plain">Edited by a person</span>' : ''}</div>
        <div><h2 class="h-big">${esc(i.title)}</h2><p class="lead">${esc(i.summary)}</p></div>${ba}
        ${who ? `<div class="actions"><button class="btn btn-primary" data-act="approve" data-id="${esc(i.id)}">Approve</button><a class="btn" href="#/edit/${esc(i.id)}" title="Fix an amount. Your version is applied and the AI's original is kept.">Edit</a>
          <details style="position:relative"><summary class="btn btn-quiet" style="padding:11px 16px" title="Sends it back with a short note. Nothing is written.">Reject</summary><form data-form="reject" data-id="${esc(i.id)}" class="f" style="position:absolute;z-index:2;background:#fff;border:1px solid #dfe6eb;border-radius:12px;padding:14px;width:300px;top:52px"><label class="k" for="rn">Why? (required)</label><textarea id="rn" name="note" rows="2" class="in"></textarea><button class="btn" type="submit">Reject</button></form></details><span class="k" style="margin-left:auto">as ${esc(who)}</span></div>` : nameGate()}</section>`;
    } else {
      const label = { applied: 'Approved', rejected: 'Rejected', handled: 'Handled' }[st.status];
      const by = (st.log.slice().reverse().find((e) => ['approved', 'rejected', 'handled'].includes(e.event)) || {}).actor || 'someone';
      body = `<section class="card pad"><div class="actions"><span class="chip c-plain">${label}</span></div><div><h2 class="h-big">${esc(i.title)}</h2><p class="lead">${label} by ${esc(by)}.</p></div>
        ${st.status === 'applied' && st.stripe_status === 'todo' ? `<div class="actions" style="background:#fdebd3;border-radius:12px;padding:14px 16px;gap:14px"><span><strong>Your to-do in Stripe:</strong> ${esc(i.stripe_todo)}, by hand. The real Review Desk never acts in Stripe.</span><button class="btn" data-act="stripeDone" data-id="${esc(i.id)}">I did it</button></div>` : ''}
        ${st.stripe_status === 'done' ? '<p class="chip c-ready" style="align-self:flex-start">Stripe step done</p>' : ''}</section>`;
    }
    return body + folds(i);
  }

  function editHtml(i, error, form) {
    const f = form || {};
    const row = (kind, fx, n) => `<div class="f"><label class="k" for="${kind}${n}">${esc(fx.name)}${kind === 's' ? ' (you do this in Stripe by hand)' : ''}: amount</label><input id="${kind}${n}" class="in mono ${error ? 'in-bad' : ''}" name="${kind}${n}" value="${esc(f[kind + n] ?? (fx.amount / 100).toFixed(2))}"><p class="k">The AI suggested ${esc(money(fx.amount))}.</p></div>`;
    return `<div style="max-width:760px;width:100%;margin:0 auto"><section class="card pad"><div><a href="#/items/${esc(i.id)}" class="k" style="text-decoration:underline">Back to the suggestion</a><h2 class="h-big" style="font-size:32px;margin-top:10px">Edit the suggestion</h2><p class="lead">Your version is checked before it can be saved. The AI's original is kept.</p></div>
      <form data-form="edit" data-id="${esc(i.id)}" class="pad" style="padding:0;gap:18px">${i.ledger_fixes.map((fx, n) => row('l', fx, n)).join('')}${i.stripe_fixes.map((fx, n) => row('s', fx, n)).join('')}
      ${error ? `<p class="err" role="alert">${esc(error)}</p>` : ''}
      <div class="f"><label class="k" for="note">Why are you editing? (required)</label><textarea id="note" name="note" rows="2" class="in">${esc(f.note || '')}</textarea></div>
      <div class="actions"><button class="btn btn-primary" type="submit">Save edit</button><a class="btn btn-quiet" href="#/items/${esc(i.id)}">Cancel</a><span class="k" style="margin-left:auto">as ${esc(who)}</span></div></form></section></div>`;
  }

  function header() {
    return `<header class="top"><div class="brand"><svg width="32" height="32" viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="9" fill="#0b6e8a"/><path d="M9 17.5l5.2 5.2L25 11.5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><h1><a href="#/">Review Desk</a></h1></div>
      <div class="actions"><span class="chip c-ready" title="In the real app every change is logged. The log cannot be edited.">Nothing is written until you approve</span>${who ? `<span class="k">as ${esc(who)}</span>` : ''}</div></header>`;
  }

  function route() {
    const hash = location.hash.replace(/^#/, '') || '/';
    const [path, qs] = hash.split('?');
    show = new URLSearchParams(qs || '').get('show') || 'all';
    let main = '', sel = null;
    const mItem = path.match(/^\/items\/([\w-]+)$/), mEdit = path.match(/^\/edit\/([\w-]+)$/);
    const find = (id) => snap.items.find((x) => x.id === id);
    if (mEdit && find(mEdit[1])) { app.innerHTML = header() + flashHtml() + editHtml(find(mEdit[1]), window.__editError, window.__editForm); window.__editError = null; window.__editForm = null; flash = null; document.body.classList.remove('app'); return; }
    if (path === '/queue') {
      const rows = snap.items.map((x) => ({ i: x, l: lane(x) }));
      const ok = { all: (r) => r.l !== 'done', ready: (r) => r.l === 'ready', risky: (r) => r.l === 'money' || r.l === 'look', you: (r) => r.l === 'you', done: (r) => r.l === 'done' }[show] || ((r) => r.l !== 'done');
      const found = rows.filter(ok).sort((a, b) => (show === 'all' ? ORDER[a.l] - ORDER[b.l] : 0) || a.i.id.localeCompare(b.i.id));
      location.replace(found.length ? '#/items/' + found[0].i.id + '?show=' + show : '#/');
      return;
    }
    if (mItem && find(mItem[1])) { sel = mItem[1]; main = itemHtml(find(mItem[1])); }
    else { document.body.classList.remove('app'); app.innerHTML = header() + flashHtml() + overviewHtml() + footerHtml(); flash = null; return; }
    document.body.classList.add('app');
    app.innerHTML = header() + flashHtml() + `<div class="cols">${queueHtml(sel)}<main class="main">${how}${main}</main></div>` + footerHtml();
    flash = null;
    keepQueueScroll();
  }
  function footerHtml() {
    return `<details style="max-width:520px"><summary class="k" style="padding:0;justify-content:flex-start;gap:8px">Reset the demo</summary><div class="actions" style="padding:8px 0"><button class="btn" data-act="reset">Reset the demo</button><span class="k">Clears your choices in this browser.</span></div></details>
      <p class="k">Demo of the Review Desk. The real app is a local FastAPI app that writes to a copy of the ledger. Here nothing leaves your browser.</p>`;
  }
  function keepQueueScroll() {
    const q = document.getElementById('queue');
    if (!q) return;
    try {
      const y = sessionStorage.getItem('queue-scroll');
      if (y !== null) q.scrollTop = +y;
      const sel = q.querySelector('.row.sel');
      if (sel) { const r = sel.getBoundingClientRect(), b = q.getBoundingClientRect(); if (r.top < b.top || r.bottom > b.bottom) sel.scrollIntoView({ block: 'center' }); }
      q.addEventListener('scroll', () => { try { sessionStorage.setItem('queue-scroll', q.scrollTop); } catch (e) { /* fine */ } });
    } catch (e) { /* the list still works without remembering its place */ }
  }
  function overviewHtml() {
    const m = snap.meta, rows = snap.items.map(lane), c = (k) => rows.filter((x) => x === k).length;
    const n = snap.items.length || 1, ready = c('ready'), risky = c('money') + c('look'), you = c('you'), doneN = c('done');
    const first = snap.items.find((x) => lane(x) === 'ready') || snap.items.find((x) => lane(x) !== 'done');
    const w = (k) => (100 * k / n).toFixed(1);
    return `<div style="max-width:900px;width:100%;margin:0 auto;display:flex;flex-direction:column;gap:18px">
      <section class="card pad"><div><p class="k">From the ${m.cases} practice cases</p><h2 class="h-big" style="margin-top:6px"><span>${m.payments}</span> payments came in</h2><p class="lead"><span>${m.no_action}</span> needed nothing, so there is nothing for you to do with them. <strong style="color:#0e1a22"><span>${n}</span> need your review.</strong></p></div>
        <div class="funnel" role="img" aria-label="Of the ${n} items to review: ${ready} ready, ${risky} risky, ${you} need you, ${doneN} done"><i class="seg s-done" style="width:${w(doneN)}%"></i><i class="seg s-ready" style="width:${w(ready)}%"></i><i class="seg s-money" style="width:${w(risky)}%"></i><i class="seg s-you" style="width:${w(you)}%"></i></div>
        <p class="k"><span>${doneN}</span> of <span>${n}</span> done</p>
        <div class="actions">${first ? `<a class="btn btn-primary" href="#/items/${esc(first.id)}">Start reviewing</a>` : '<span class="chip c-ready">All done</span>'}<span class="k">The AI only suggests. Nothing is written until you approve it.</span></div></section>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px">
        <a class="card tile" href="#/queue?show=ready"><span class="chip c-ready">Ready</span><span class="big-n">${ready}</span><span class="v">Safe to approve</span><span class="k">One click each. You can approve them all at once.</span></a>
        <a class="card tile" href="#/queue?show=risky"><span class="chip c-money">Risky</span><span class="big-n">${risky}</span><span class="v">Look twice</span><span class="k">These move money or look unusual. Each needs a second look.</span></a>
        <a class="card tile" href="#/queue?show=you"><span class="chip c-you">Needs you</span><span class="big-n">${you}</span><span class="v">The AI stopped on purpose</span><span class="k">It could not decide safely, so a person settles it.</span></a></div>
      <section class="card fold">${how}</section></div>`;
  }
  const flashHtml = () => (flash ? `<div class="flash ${flashBad ? 'bad' : ''}" role="status">${esc(flash)}</div>` : '');

  function run(action, args) {
    const out = DemoCore.act(snap, state, action, { by: who, ...args });
    if (!out.ok) { flash = out.error; flashBad = true; return out; }
    state = out.state; flash = out.message; flashBad = false; save();
    return out;
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    e.preventDefault();
    const a = b.dataset.act, id = b.dataset.id;
    if (a === 'reset') { state = DemoCore.init(snap); flash = 'Demo reset. A fresh queue.'; flashBad = false; save(); location.hash = '#/'; route(); return; }
    const out = run(a, { id });
    if (a === 'approveReady') { location.hash = '#/'; route(); return; }
    if (out.ok && out.to) location.hash = '#/items/' + out.to;
    route();
  });

  document.addEventListener('submit', (e) => {
    const f = e.target.closest('[data-form]');
    if (!f) return;
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f).entries()), id = f.dataset.id, kind = f.dataset.form;
    if (kind === 'name') { who = (d.name || '').trim().slice(0, 60); if (who) { save(); } route(); return; }
    let out;
    if (kind === 'confirm') out = run('confirm', { id, checked: !!d.confirmed });
    else if (kind === 'sendBack') out = run('sendBack', { id, note: d.note });
    else if (kind === 'reject') out = run('reject', { id, note: d.note });
    else if (kind === 'handled') out = run('handled', { id, note: d.note });
    else if (kind === 'edit') {
      const it = snap.items.find((x) => x.id === id), toCents = (v) => { const n = Number(String(v).replace(/[$,]/g, '')); return Number.isFinite(n) && String(v).trim() !== '' ? Math.round(n * 100) : NaN; };
      out = run('edit', { id, note: d.note, ledger: it.ledger_fixes.map((_, n) => toCents(d['l' + n])), stripe: it.stripe_fixes.map((_, n) => toCents(d['s' + n])) });
      if (!out.ok) { window.__editError = out.error; window.__editForm = d; location.hash = '#/edit/' + id; route(); return; }
    }
    if (out && out.ok && out.to) location.hash = '#/items/' + out.to;
    route();
  });
  window.addEventListener('hashchange', route);

  fetch('snapshot.json').then((r) => r.json()).then((s) => {
    snap = s;
    const saved = load();
    state = saved.state && Object.keys(saved.state.items || {}).length === snap.items.length ? saved.state : DemoCore.init(snap);
    who = saved.who || '';
    route();
  }).catch(() => { app.textContent = 'The demo could not load its snapshot.'; });
})();
