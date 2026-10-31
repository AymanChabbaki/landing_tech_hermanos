import styles from './Audience.module.css'
import Reveal from '@/components/ui/Reveal'
import { useTranslations } from '@/i18n/LocaleContext'

export default function Audience() {
  const t = useTranslations()

  return (
    <section className={styles.section} aria-labelledby="audience-heading">
      <div className="container">
        <Reveal className={styles.inner}>
          <p className={styles.label}>{t.audience.label}</p>
          <h2 className={styles.heading} id="audience-heading">{t.audience.heading}</h2>
          <ul className={styles.chips}>
            {t.audience.items.map((item) => (
              <li key={item} className={styles.chip}>
                <span className={styles.tick} aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
