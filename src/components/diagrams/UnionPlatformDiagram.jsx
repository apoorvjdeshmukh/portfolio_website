import S from './Diagram.module.css'

const c = (...k) => k.map(x => S[x]).join(' ')

export default function UnionPlatformDiagram() {
  return (
    <div className={S.diagram}>
      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>Before</span>
          <span className={S.name}>7-Screen Setup</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={c('chip', 'chipBad')}>First value 7 screens deep</span>
            <div className={S.barTrack}>
              <div className={c('barFill', 'barBad')} style={{ width: '60%' }}>60% completion</div>
            </div>
          </div>
          <p className={S.note}>40+ interviews revealed users weren’t confused — <strong>they were bored before they got started</strong>.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>After</span>
          <span className={S.name}>3 High-Value Moments</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={c('chip', 'chipGood')}>Value first, profile later</span>
            <div className={S.barTrack}>
              <div className={c('barFill', 'barGood')} style={{ width: '95%' }}>95% completion</div>
            </div>
          </div>
          <p className={S.note}>Progress indicators added, optional data deferred — <strong>shipped within two sprints</strong>.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>Downstream</span>
          <span className={S.name}>The Growth Loop</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Retention recovered</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>DAU 20K → 50K (+150%)</span>
            <span className={S.arrow}>·</span>
            <span className={c('chip', 'chipGood')}>200K+ downloads</span>
          </div>
          <p className={S.note}>300+ dimension GCP warehouse made every follow-up decision <strong>measurable within hours</strong>.</p>
        </div>
      </div>

      <p className={S.caption}>Consumer · iOS & Android · 40+ user interviews</p>
    </div>
  )
}
