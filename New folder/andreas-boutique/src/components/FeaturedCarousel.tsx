import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  { src: 'https://images.unsplash.com/photo-1594552072238-fb33e84ebf63?w=900&q=85', alt: 'Featured wedding dress' },
  { src: 'https://images.unsplash.com/photo-1566174053879-31525623c5d6?w=900&q=85', alt: 'Evening gown' },
  { src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=85', alt: 'Fancy articles' },
]

export function FeaturedCarousel() {
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length

  const goTo = (i: number) => setCurrent((i + total) % total)

  useEffect(() => {
    const id = setInterval(() => goTo(current + 1), 5000)
    return () => clearInterval(id)
  }, [current])

  return (
    <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden bg-gray-light shadow-lg">
      <div className="featured-carousel relative overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[2/1]">
        <div
          className="featured-carousel-track flex h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <Link key={i} to="/product/1" className="featured-slide flex-shrink-0 w-full h-full block">
              <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          className="featured-carousel-btn absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-gray-dark shadow-md flex items-center justify-center z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          className="featured-carousel-btn absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-gray-dark shadow-md flex items-center justify-center z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`featured-dot w-2 h-2 rounded-full ${i === current ? 'active bg-pink/80 text-pink' : 'bg-white/80'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
