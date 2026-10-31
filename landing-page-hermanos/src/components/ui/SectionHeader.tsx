import styles from './SectionHeader.module.css'
import SectionLabel from './SectionLabel'
import Reveal from './Reveal'

interface SectionHeaderProps {
  label: string
  heading: string
  sub?: string
  tone?: 'light' | 'dark'
}

export default function SectionHeader({ label, heading, sub, tone = 'light' }: SectionHeaderProps) {
  return (
    <Reveal className={`${styles.header} ${tone === 'dark' ? styles.onDark : ''}`}>
      <SectionLabel variant={tone}>{label}</SectionLabel>
      <h2 className={styles.heading}>{heading}</h2>
      {sub && <p className={styles.sub}>{sub}</p>}
    </Reveal>
  )
}
