import { useEffect, useState } from 'react'
import styles from './StickyCTA.module.css'
import { WhatsappIcon } from '@/components/ui/icons'
import { useScrollPast } from '@/hooks/useScrollPast'
import { useTranslations } from '@/i18n/LocaleContext'
import { trackEvent, whatsappLink } from '@/lib/contact'

/* Phone-only bottom bar: shows once the hero is scrolled past and gets out of
   the way while the form itself is on screen. */
export default function StickyCTA() {
  const t = useTranslations()
  const pastHero = useScrollPast(480)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    const form = document.getElementById('form-section')
    if (!form || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), {
      threshold: 0.15,
    })
    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  const shown = pastHero && !formVisible

  return (
    <div className={`${styles.bar} ${shown ? styles.shown : ''}`} aria-hidden={!shown}>
      <a
        href={whatsappLink(t.whatsappGreeting)}
        target="_blank"
        rel="noreferrer"
        className={styles.whatsapp}
        tabIndex={shown ? 0 : -1}
        onClick={() => trackEvent('Contact', { method: 'whatsapp', placement: 'sticky' })}
      >
        <WhatsappIcon />
        {t.stickyCta.whatsapp}
      </a>
      <a href="#form-section" className={styles.primary} tabIndex={shown ? 0 : -1}>
        {t.stickyCta.primary}
      </a>
    </div>
  )
}
