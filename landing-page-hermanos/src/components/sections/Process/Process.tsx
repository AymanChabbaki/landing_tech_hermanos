import styles from './Process.module.css'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { ArrowIcon } from '@/components/ui/icons'
import { useTranslations } from '@/i18n/LocaleContext'

export default function Process() {
  const t = useTranslations()

  return (
    <section className={styles.section} id="process">
      <div className="container">
        <SectionHeader label={t.process.label} heading={t.process.heading} />

        <ol className={styles.steps}>
          {t.process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} className={styles.step} delay={i * 120}>
              <span className={styles.number}>{i + 1}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className={styles.ctaRow}>
          <Button href="#form-section" variant="vip" size="xl">
            {t.process.cta}
            <ArrowIcon />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
