import { useRef, useState } from 'react'
import styles from './Hero.module.css'
import Button from '@/components/ui/Button'
import { ArrowIcon, WhatsappIcon } from '@/components/ui/icons'
import { useLocale, useTranslations } from '@/i18n/LocaleContext'
import { Locale } from '@/i18n/translations'
import { trackEvent, whatsappLink } from '@/lib/contact'

/* The VSL shown in the hero, per language. The frame is 16:9; a vertical clip
   still works (it's letterboxed over a blurred copy of the poster). */
const VSLS: Record<Locale, { sources: { src: string; type: string }[]; poster: string }> = {
  fr: {
    sources: [{ src: '/videos/vsl-fr.mp4', type: 'video/mp4' }],
    poster: '/images/vsl-fr-poster.jpg',
  },
  ar: {
    sources: [{ src: '/videos/vsl-ar.mp4', type: 'video/mp4' }],
    poster: '/images/vsl-ar-poster.jpg',
  },
}

export default function Hero() {
  const t = useTranslations()
  const VSL = VSLS[useLocale()]
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const milestones = useRef(new Set<number>())

  const start = () => {
    const video = videoRef.current
    if (!video) return
    video.play()
    setStarted(true)
    trackEvent('VSLPlay')
  }

  /* Watch-depth events let the ad platforms build "watched 50%+" audiences */
  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video?.duration) return
    const pct = (video.currentTime / video.duration) * 100
    for (const mark of [25, 50, 75, 95]) {
      if (pct >= mark && !milestones.current.has(mark)) {
        milestones.current.add(mark)
        trackEvent('VSLProgress', { percent: mark })
      }
    }
  }

  return (
    <section className={styles.hero} id="home">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          <p className={`${styles.eyebrow} ${styles.animIn}`}>{t.hero.eyebrow}</p>

          <h1 className={`${styles.heading} ${styles.animIn}`}>
            {t.hero.heading.before} <span className={styles.highlight}>{t.hero.heading.highlight}</span>
            {t.hero.heading.after}
          </h1>

          <p className={`${styles.subtitle} ${styles.animIn} ${styles.delay1}`}>{t.hero.subtitle}</p>

          <div className={`${styles.vsl} ${styles.animIn} ${styles.delay1}`}>
            <div className={styles.vslLabel}>
              <span className={styles.liveDot} />
              {t.hero.vslLabel}
            </div>

            <div className={styles.vslFrame} style={{ backgroundImage: `url(${VSL.poster})` }}>
              <video
                key={VSL.poster}
                ref={videoRef}
                className={styles.video}
                controls={started}
                playsInline
                preload="metadata"
                poster={VSL.poster}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => trackEvent('VSLComplete')}
              >
                {VSL.sources.map((s) => (
                  <source key={s.src} src={s.src} type={s.type} />
                ))}
              </video>

              {!started && (
                <button type="button" className={styles.playOverlay} onClick={start}>
                  <span className={styles.playBtn} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.5v13l11-6.5Z" />
                    </svg>
                  </span>
                  <span className={styles.playText}>{t.hero.vslPlay}</span>
                </button>
              )}
            </div>
          </div>

          <div className={`${styles.actions} ${styles.animIn} ${styles.delay2}`}>
            <Button href="#form-section" variant="vip" size="xl">
              {t.hero.ctaPrimary}
              <ArrowIcon />
            </Button>
            <Button
              href={whatsappLink(t.whatsappGreeting)}
              variant="whatsapp"
              size="xl"
              external
              onClick={() => trackEvent('Contact', { method: 'whatsapp', placement: 'hero' })}
            >
              <WhatsappIcon />
              {t.hero.ctaWhatsapp}
            </Button>
          </div>

          <ul className={`${styles.trust} ${styles.animIn} ${styles.delay2}`}>
            {t.hero.trust.map((item) => (
              <li key={item}>
                <span className={styles.check} aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
