import styles from './Faq.module.css'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { useTranslations } from '@/i18n/LocaleContext'

export default function Faq() {
  const t = useTranslations()

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <SectionHeader label={t.faq.label} heading={t.faq.heading} />

        <Reveal className={styles.list}>
          {t.faq.items.map((item, i) => (
            <details key={item.q} className={styles.item} open={i === 0}>
              <summary className={styles.question}>
                {item.q}
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
