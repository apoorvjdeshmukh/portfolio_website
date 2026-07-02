import S from './Diagram.module.css'

const c = (...k) => k.map(x => S[x]).join(' ')

export default function FintechMpDiagram() {
  return (
    <div className={S.diagram}>
      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>MVP scope</span>
          <span className={S.name}>6 Epics Shipped</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={c('chip', 'chipAccent')}>KYC onboarding</span>
            <span className={S.arrow}>+</span>
            <span className={c('chip', 'chipAccent')}>Stripe credits & tiers</span>
            <span className={S.arrow}>+</span>
            <span className={c('chip', 'chipAccent')}>Admin approval gates</span>
            <span className={S.arrow}>+</span>
            <span className={S.chip}>Shop · feed · events</span>
          </div>
          <p className={S.note}>Scoped via a <strong>code POC built in Cursor</strong> — stakeholders experienced the product before dev handoff.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>The ask</span>
          <span className={S.name}>Post-MVP Scope Creep</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={c('chip', 'chipBad')}>+4 epics · 15+ features</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipBad')}>Projected +8 weeks to launch</span>
          </div>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>The response</span>
          <span className={S.name}>Trade-off Analysis</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Hour-level estimates per feature</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipAccent')}>Delivery risk vs. revenue session</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>60% of requests → V2 backlog</span>
          </div>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>Outcome</span>
          <span className={S.name}>Momentum Protected</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={c('chip', 'chipGood')}>Delay held to 4 weeks — vs. 8 projected</span>
            <span className={S.arrow}>·</span>
            <span className={c('chip', 'chipGood')}>KYC-compliant MVP live</span>
          </div>
        </div>
      </div>

      <p className={S.caption}>UAE-regulated · 6 epics · 20+ features · ReactJS + Node.js</p>
    </div>
  )
}
