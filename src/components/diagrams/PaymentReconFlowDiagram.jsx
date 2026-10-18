import S from './Diagram.module.css'

const c = (...k) => k.map(x => S[x]).join(' ')

export default function PaymentReconFlowDiagram() {
  return (
    <div className={S.diagram}>
      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>1</span>
          <span className={S.name}>Rules first</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Stripe test-mode payment</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Matched against the patient ledger</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Clean: nothing to do, no AI cost</span>
          </div>
          <p className={S.note}>Plain rules fully resolved <strong>74% of 50 labeled cases</strong>. What they cannot settle goes on.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>2</span>
          <span className={S.name}>AI investigates</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Exception the rules stopped on</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Claude Sonnet 5.5 looks up Stripe, the ledger, related payments, the payout</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Proposes a fix with a confidence label, or hands it to a person</span>
          </div>
          <p className={S.note}>It <strong>reads and proposes, and never writes</strong>. Text planted in a payment is treated as data, not as an order.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>3</span>
          <span className={S.name}>A person decides</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Review queue: ready · risky · needs you</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Approve, edit or reject (second look when money moves)</span>
          </div>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>4</span>
          <span className={S.name}>Write and log</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Write gate: approved items only</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Working copy of the ledger</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Append-only audit log</span>
          </div>
        </div>
      </div>

      <p className={S.caption}>Python · SQLite · Stripe test mode · plain tool-use loop, no agent framework · synthetic data only</p>
    </div>
  )
}
