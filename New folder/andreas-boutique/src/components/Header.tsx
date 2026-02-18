import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { Logo } from './Logo'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/collections', label: 'Collections' },
  { to: '/featured', label: 'Featured' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/cart', label: 'Cart' },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between" aria-label="Main">
          <Logo />
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-sm font-light letter-wide uppercase text-gray-dark/90">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={cn(
                    'nav-link hover:text-pink transition-colors duration-300',
                    location.pathname === to || (to !== '/' && location.pathname.startsWith(to)) ? 'text-pink' : ''
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="md:hidden p-2.5 -mr-2 text-gray-dark hover:text-pink transition-colors rounded-lg touch-manipulation"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobileMenu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-6 h-6" aria-hidden />
            </button>
            <Link to="/cart" className="text-gray-dark/80 hover:text-pink transition-colors p-2 sm:p-0" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </header>

      <div
        id="mobileMenu"
        className={cn('mobile-menu fixed inset-0 z-40 bg-white pt-20 px-6 pb-8 overflow-y-auto md:hidden', mobileOpen && 'open')}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="absolute top-4 right-4 p-2 text-gray-dark hover:text-pink transition-colors rounded-lg"
          aria-label="Close menu"
          onClick={closeMobile}
        >
          <X className="w-6 h-6" />
        </button>
        <nav className="flex flex-col gap-1 mt-4 font-sans text-sm letter-wide uppercase text-gray-dark/90" aria-label="Mobile">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMobile}
              className={cn(
                'py-3 border-b border-gray-light hover:text-pink transition-colors',
                location.pathname === to || (to !== '/' && location.pathname.startsWith(to)) ? 'text-pink' : ''
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
