import { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'vip' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  /* Opens the link in a new tab (WhatsApp, socials) */
  external?: boolean
  /* Pre-selects this service in the form when the link targets it */
  service?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  service,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        data-service={service}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
