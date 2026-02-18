import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn('flex items-center gap-2 text-gray-dark hover:text-pink transition-colors min-w-0', className)}>
      <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 text-pink" aria-hidden>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M20 11 L12 29 M20 11 L28 29 M14 20 L26 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-serif text-lg sm:text-xl font-medium tracking-wide truncate">Andreas Boutiques</span>
    </Link>
  )
}
