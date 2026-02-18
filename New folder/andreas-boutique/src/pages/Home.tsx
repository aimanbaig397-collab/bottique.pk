import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FeaturedCarousel } from '@/components/FeaturedCarousel'

const COLLECTIONS = [
  { title: 'Bridal', img: 'https://images.unsplash.com/photo-1594552072238-fb33e84ebf63?w=600&q=85', alt: 'Bridal collection' },
  { title: 'Evening Gowns', img: 'https://images.unsplash.com/photo-1566174053879-31525623c5d6?w=600&q=85', alt: 'Evening gowns' },
  { title: 'Fancy Articles', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85', alt: 'Fancy articles' },
]

const FEATURES = [
  { title: 'Free Shipping', desc: 'On orders over $500. Express delivery available.', color: 'bg-pink/10', iconColor: 'text-pink' },
  { title: 'Secure Payment', desc: 'SSL encrypted. All major cards accepted.', color: 'bg-coral/10', iconColor: 'text-coral' },
  { title: 'Easy Returns', desc: '14-day returns on ready-to-wear. See ', color: 'bg-mint/20', iconColor: 'text-mint', termsLink: true },
  { title: 'Personal Fitting', desc: 'Book a consultation at our boutique. ', color: 'bg-violet/10', iconColor: 'text-violet', contactLink: true },
]

export function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center hero-bg bg-pink-light" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=85')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-white/45 to-white/85" />
        <div className="relative z-10 text-center max-w-3xl w-full">
          <div className="flex justify-center mb-4 sm:mb-6 hero-logo">
            <span className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-pink" aria-hidden>
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-sm">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M20 11 L12 29 M20 11 L28 29 M14 20 L26 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-dark mb-3 sm:mb-4 hero-title px-1">Andreas Boutiques</h1>
          <p className="text-gray-dark/80 text-sm sm:text-base mb-6 sm:mb-8 hero-sub">Wedding dresses, evening gowns & fancy articles.</p>
          <Link to="/collections" className="hero-btn inline-block">
            <Button>Shop now</Button>
          </Link>
        </div>
      </section>

      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white border-t border-gray-light/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-gray-dark mb-3 sm:mb-4 text-center" data-animate>Why Andreas</h2>
          <p className="text-gray-mid text-center mb-8 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base" data-animate>We make your special day easier with services you can trust.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`feature-card p-6 rounded-2xl bg-gray-soft border border-gray-light/80 text-center ${i === 0 ? '' : ''}`} data-animate>
                <div className={`w-14 h-14 rounded-full ${f.color} flex items-center justify-center mx-auto mb-4 feature-icon`}>
                  <span className={`w-7 h-7 ${f.iconColor}`}>•</span>
                </div>
                <h3 className="font-serif text-lg text-gray-dark mb-2">{f.title}</h3>
                <p className="text-sm text-gray-mid">{f.desc}{f.termsLink ? <><Link to="/terms" className="text-pink hover:underline">terms</Link>.</> : f.contactLink ? <><Link to="/contact" className="text-pink hover:underline">Contact us</Link>.</> : null}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-gray-dark mb-6 sm:mb-10" data-animate>Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {COLLECTIONS.map((c) => (
              <Link key={c.title} to="/product/1" className="group block rounded-2xl overflow-hidden bg-white border border-gray-light shadow-sm card-hover card-shine" data-animate>
                <div className="aspect-[3/4] overflow-hidden bg-gray-light">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 img-reveal" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-gray-dark">{c.title}</h3>
                  <p className="text-pink text-sm transition-transform duration-300 group-hover:translate-x-1 inline-block">View details →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-gray-dark mb-4 sm:mb-6 text-center" data-animate>Featured</h2>
          <p className="text-gray-mid max-w-xl mx-auto mb-8 sm:mb-12 text-center text-sm sm:text-base" data-animate>Your wedding dress and occasion wear, crafted with care.</p>
          <div data-animate>
            <FeaturedCarousel />
          </div>
          <p className="text-center mt-6" data-animate>
            <Link to="/product/1">
              <Button>View featured</Button>
            </Link>
          </p>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-pink-light/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-gray-dark mb-6 sm:mb-10 text-center" data-animate>Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-light" data-animate>
              <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=700&q=85" alt="Boutique" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 img-reveal" loading="lazy" />
            </div>
            <div className="text-gray-mid" data-animate>
              <p className="mb-4">Andreas Boutiques brings together bridal and occasion wear with the finest lace, silk, and craftsmanship.</p>
              <p>Visit us for a personal fitting or browse our collections online.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
