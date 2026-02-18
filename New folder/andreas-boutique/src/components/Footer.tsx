import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const FOOTER_LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/collections', label: 'Collections' },
  { to: '/contact', label: 'Contact' },
  { to: '/terms', label: 'Terms' },
  { to: '/cart', label: 'Cart' },
] as const

export function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-pink/20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
        <Logo className="justify-center md:justify-start" />
        <ul className="flex flex-wrap justify-center gap-6 font-sans text-sm letter-wide uppercase text-gray-mid">
          {FOOTER_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="hover:text-pink transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-mid">© 2025 Andreas Boutiques</p>
      </div>
    </footer>
  )
}
