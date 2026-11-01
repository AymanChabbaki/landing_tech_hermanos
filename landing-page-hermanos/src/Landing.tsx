import { useEffect } from 'react'
import TopBar from '@/components/TopBar/TopBar'
import Navbar from '@/components/Navbar/Navbar'
import StickyCTA from '@/components/StickyCTA/StickyCTA'
import Hero from '@/components/sections/Hero/Hero'
import Audience from '@/components/sections/Audience/Audience'
import Pains from '@/components/sections/Pains/Pains'
import Services from '@/components/sections/Services/Services'
import Comparison from '@/components/sections/Comparison/Comparison'
import Process from '@/components/sections/Process/Process'
import Portfolio from '@/components/sections/Portfolio/Portfolio'
import Faq from '@/components/sections/Faq/Faq'
import FormSection from '@/components/sections/FormSection/FormSection'
import Footer from '@/components/Footer/Footer'
import { LocaleProvider } from '@/i18n/LocaleContext'
import { Locale, translations } from '@/i18n/translations'

export default function Landing({ locale }: { locale: Locale }) {
  const t = translations[locale]

  useEffect(() => {
    const canonicalUrl = `https://landing.techermanos.org${locale === 'ar' ? '/ar' : '/'}`

    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.meta.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', locale === 'ar' ? 'ar_MA' : 'fr_FR')
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', t.meta.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', t.meta.description)
  }, [locale, t])

  /* Internal `#id` links (nav, buttons, footer) smooth-scroll instead of
     jumping, and a `data-service` attribute on the link pre-selects the form. */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      const href = anchor?.getAttribute('href')
      if (!href?.startsWith('#')) return
      e.preventDefault()

      const service = anchor?.dataset.service
      if (service) window.dispatchEvent(new CustomEvent('th:select-service', { detail: service }))

      /* On phones the form sits under its heading, so CTAs jump straight to
         the form card itself rather than the top of the section. */
      let id = href.slice(1)
      if (id === 'form-section' && window.matchMedia('(max-width: 900px)').matches) id = 'lead-form'

      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [])

  return (
    <LocaleProvider locale={locale}>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <Pains />
        <Services />
        <Comparison />
        <Process />
        <Portfolio />
        <Faq />
        <FormSection />
      </main>
      <Footer />
      <StickyCTA />
    </LocaleProvider>
  )
}
