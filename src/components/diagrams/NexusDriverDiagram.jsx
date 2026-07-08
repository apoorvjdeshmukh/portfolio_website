import S from './Diagram.module.css'

const c = (...k) => k.map(x => S[x]).join(' ')

export default function NexusDriverDiagram() {
  return (
    <div className={S.diagram}>
      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>Stage 1</span>
          <span className={S.name}>CA Break Compliance</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Clock-in</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Elapsed shift time</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipAccent')}>Mandatory break prompt</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Accept / Reject / Sign waiver</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Timestamped legal record</span>
          </div>
          <p className={S.note}>Every interaction stored for legal defense — <strong>replaced undocumented manual logs</strong>.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>Stage 2</span>
          <span className={S.name}>DVIR Inspections</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={c('chip', 'chipAccent')}>DVIR checklist</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Photo proof — truck · trailer · chassis</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Pass → dispatch</span>
          </div>
          <div className={S.flow}>
            <span className={c('chip', 'chipBad')}>Fail → auto-tag “Needs Repair”</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Maintenance alerted instantly</span>
          </div>
          <p className={S.note}>No truck leaves the warehouse without a <strong>verifiable inspection record</strong>.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>The pivot</span>
          <span className={S.name}>After-Hours Gap</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={c('chip', 'chipBad')}>Failed inspection, dispatchers gone</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipAccent')}>Driver self-assigns alternate vehicle</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>0 after-hours dispatch calls</span>
          </div>
          <p className={S.note}>Single source of truth <strong>stays accurate in real time</strong> — no waiting until morning.</p>
        </div>
      </div>

      <p className={S.caption}>iOS & Android · shared GCP infrastructure with the Nexus web platform</p>
    </div>
  )
}
