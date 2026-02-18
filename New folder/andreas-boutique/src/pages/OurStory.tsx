import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Timeline } from '@/components/Timeline'

export function OurStory() {
  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-dark mb-6 sm:mb-10 text-center">Our Story</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-light">
            <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=700&q=85" alt="Boutique" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
          </div>
          <div className="text-gray-mid space-y-4">
            <p>Andreas Boutiques brings together bridal and occasion wear with the finest lace, silk, and craftsmanship.</p>
            <p>Visit us for a personal fitting or browse our collections online.</p>
            <p className="pt-4">
              <Link to="/contact">
                <Button>Contact us</Button>
              </Link>
            </p>
          </div>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-light text-gray-dark mt-16 sm:mt-20 mb-8 sm:mb-10 text-center">Our Journey</h2>
        <Timeline />
      </div>
    </main>
  )
}
