import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCalendar,
  IconCertificate,
  IconChartBar,
  IconCheck,
  IconChessKnight,
  IconChevronLeft,
  IconChevronRight,
  IconCircleCheckFilled,
  IconCloud,
  IconCpu,
  IconDownload,
  IconFileCv,
  IconMail,
  IconNotes,
  IconQuote,
  IconSend,
  IconTrophy,
  IconUser,
  IconWorld,
} from '@tabler/icons-react'

const icons = {
  'arrow-down': IconArrowDown,
  'arrow-right': IconArrowRight,
  'arrow-up-right': IconArrowUpRight,
  'brand-github': IconBrandGithub,
  'brand-linkedin': IconBrandLinkedin,
  'calendar': IconCalendar,
  'certificate': IconCertificate,
  'chart-bar': IconChartBar,
  'check': IconCheck,
  'chess-knight': IconChessKnight,
  'chevron-left': IconChevronLeft,
  'chevron-right': IconChevronRight,
  'circle-check-filled': IconCircleCheckFilled,
  'cloud': IconCloud,
  'cpu': IconCpu,
  'download': IconDownload,
  'file-cv': IconFileCv,
  'mail': IconMail,
  'notes': IconNotes,
  'quote': IconQuote,
  'send': IconSend,
  'trophy': IconTrophy,
  'user': IconUser,
  'world': IconWorld,
}

// Renders inside an <i> so existing CSS (e.g. `.btnPrimary i { font-size }`)
// keeps sizing icons exactly as it did with the webfont.
export default function Icon({ name, className }) {
  const Cmp = icons[name]
  if (!Cmp) return null
  return (
    <i
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-flex', lineHeight: 1, verticalAlign: '-0.125em' }}
    >
      <Cmp size="1em" stroke={2} />
    </i>
  )
}
