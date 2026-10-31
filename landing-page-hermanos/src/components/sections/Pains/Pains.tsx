import styles from './Pains.module.css'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { ArrowIcon } from '@/components/ui/icons'
import { useTranslations } from '@/i18n/LocaleContext'

/* One icon per pain, in the same order as t.pains.items */
const icons = [
  /* not found online */
  <svg key="search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2M8.5 11h5" strokeLinecap="round" />
  </svg>,
  /* manual work */
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  /* wasted ad budget */
  <svg key="money" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 7h16v10H4z" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="m3 21 18-18" strokeLinecap="round" />
  </svg>,
  /* stuck idea */
  <svg key="idea" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
]

export default function Pains() {
  const t = useTranslations()

  return (
    <section className={styles.section} id="pains">
      <div className="container">
        <SectionHeader label={t.pains.label} heading={t.pains.heading} />

        <div className={styles.grid}>
          {t.pains.items.map((item, i) => (
            <Reveal key={item.title} className={styles.card} delay={i * 90}>
              <span className={styles.icon} aria-hidden="true">{icons[i % icons.length]}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.bridge}>
          <p>{t.pains.bridge}</p>
          <Button href="#form-section" variant="primary" size="lg">
            {t.pains.cta}
            <ArrowIcon />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
