import S from './Diagram.module.css'

const c = (...k) => k.map(x => S[x]).join(' ')

export default function SnugFlowDiagram() {
  return (
    <div className={S.diagram}>
      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>1</span>
          <span className={S.name}>Add books</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Shelf photo</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Claude Sonnet 5 reads every spine</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Matched · Uncertain · Unreadable</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Google Books (cache first)</span>
          </div>
          <p className={S.note}>Barcode scans skip the AI entirely: <strong>on-device ISBN read, then a cached lookup</strong>.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>2</span>
          <span className={S.name}>Guard photos</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Any photo added</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Moderation model: unsafe content</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>GPT-4o-mini: is it a book? (~$0.0004)</span>
          </div>
          <p className={S.note}>The <strong>cheapest model that answers each question</strong>.</p>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>3</span>
          <span className={S.name}>Lend</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Pick a friend or a name</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Due date, optional condition photo</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Linked loan shows for both of you</span>
          </div>
        </div>
      </div>

      <div className={S.row}>
        <div className={S.rowLabel}>
          <span className={S.num}>4</span>
          <span className={S.name}>Get it back</span>
        </div>
        <div className={S.body}>
          <div className={S.flow}>
            <span className={S.chip}>Server-scheduled reminder</span>
            <span className={S.arrow}>→</span>
            <span className={S.chip}>Gentle nudge to the borrower</span>
            <span className={S.arrow}>→</span>
            <span className={c('chip', 'chipGood')}>Marked returned → Return Rate (North Star)</span>
          </div>
        </div>
      </div>

      <p className={S.caption}>React Native · Supabase · 9 edge functions · AI keys never leave the server</p>
    </div>
  )
}
