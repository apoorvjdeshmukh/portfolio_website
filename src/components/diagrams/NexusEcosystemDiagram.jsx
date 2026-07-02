import S from './Diagram.module.css'

const c = (...k) => k.map(x => S[x]).join(' ')

export default function NexusEcosystemDiagram() {
  return (
    <div className={S.diagram}>
      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>Phase 1</span>
          <span className={S.name}>Operations Core</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Customer email</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipAccent')}>Operations — digital shipment</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipAccent')}>Dispatch — MAWB tally</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Driver assignment</span>
          </div>
          <p className={S.note}>Sequential RBAC: Dispatch can only act on digitized shipments — <strong>prevents data mangling at the source</strong>.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>Phase 2</span>
          <span className={S.name}>Governance & Financial Integrity</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Accounting bill</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipAccent')}>Super Admin approval gate</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Audit-ready invoice</span>
          </div>
          <div className={S.flow}>
            <span className={S.chip}>BI dashboards — tonnage · trends · completion</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>GCP data warehouse</span>
          </div>
          <p className={S.note}>Approval gates on every bill <strong>eliminated manual fraud risk</strong>.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>Phase 3</span>
          <span className={S.name}>External Transparency</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={c('chip', 'chipAccent')}>Customer Admin Portal</span>
            <span className={S.arrow}>+</span>
            <span className={S.chip}>Visual inquiries w/ images</span>
            <span className={S.arrow}>+</span>
            <span className={c('chip', 'chipGood')}>Public MAWB tracking — no login</span>
          </div>
          <p className={S.note}>Self-service tracking <strong>reduced manual support load</strong> on Operations.</p>
        </div>
      </div>

      <p className={S.caption}>11+ services · 7 personas · 100K+ shipments/yr · GCP</p>
    </div>
  )
}
