import styles from './Services.module.css'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { ArrowIcon } from '@/components/ui/icons'
import { useTranslations } from '@/i18n/LocaleContext'
import { ServiceType } from '@/types'

const icons: Partial<Record<ServiceType, JSX.Element>> = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18M8 21h8M12 18v3" strokeLinecap="round" />
    </svg>
  ),
  app: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" strokeLinecap="round" />
    </svg>
  ),
  system: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <path d="M17.25 14v6.5M14 17.25h6.5" strokeLinecap="round" />
    </svg>
  ),
  ads: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1Z" strokeLinejoin="round" />
      <path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11" strokeLinecap="round" />
    </svg>
  ),
}

export default function Services() {
  const t = useTranslations()

  return (
    <section className={styles.section} id="services">
      <div className="container">
        <SectionHeader label={t.services.label} heading={t.services.heading} sub={t.services.sub} tone="dark" />

        <div className={styles.grid}>
          {t.services.items.map((item, i) => (
            <Reveal key={item.id} className={styles.card} delay={i * 90}>
              <span className={styles.icon} aria-hidden="true">{icons[item.id]}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
              <ul className={styles.bullets}>
                {item.bullets.map((b) => (
                  <li key={b}>
                    <span className={styles.tick} aria-hidden="true">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Button href="#form-section" service={item.id} variant="outline" size="md" className={styles.cta}>
                {t.services.cta}
                <ArrowIcon />
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
