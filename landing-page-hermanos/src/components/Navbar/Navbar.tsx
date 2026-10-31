import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ArrowIcon } from '@/components/ui/icons'
import { useScrollPast } from '@/hooks/useScrollPast'
import { useTranslations } from '@/i18n/LocaleContext'

export default function Navbar() {
  const scrolled = useScrollPast(8)
  const t = useTranslations()
  const { pathname } = useLocation()
  const isAr = pathname.startsWith('/ar')

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.row}>
        <a href="#home" className={styles.logo}>
          <img src="/images/logo-text.png" alt="Tech Hermanos" className={styles.logoImg} />
        </a>

        <nav className={styles.links} aria-label="Navigation">
          {t.nav.links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.end}>
          <div className={styles.langSwitcher} aria-label="Langue">
            <Link to="/" className={!isAr ? styles.langActive : styles.langLink}>FR</Link>
            <Link to="/ar" className={isAr ? styles.langActive : styles.langLink}>AR</Link>
          </div>

          <a href="#form-section" className={styles.cta}>
            <span>{t.nav.cta}</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  )
}
