import { useEffect, useState } from 'react'

export function useScrollPast(threshold: number): boolean {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return past
}
