import { Link } from 'react-router-dom'
import { FeaturedCarousel } from '@/components/FeaturedCarousel'
import { Button } from '@/components/ui/button'

const FEATURED_ITEMS = [
  { title: 'Elegant Lace Wedding Gown', img: 'https://images.unsplash.com/photo-1594552072238-fb33e84ebf63?w=600&q=85', price: '$2,499.00' },
  { title: 'Evening Gown', img: 'https://images.unsplash.com/photo-1566174053879-31525623c5d6?w=600&q=85', price: '$1,899.00' },
  { title: 'Fancy Articles', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85', price: '$599.00' },
]

export function Featured() {
  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-dark mb-4 sm:mb-6">Featured</h1>
        <p className="text-gray-mid mb-8 sm:mb-12 text-sm sm:text-base max-w-xl">Handpicked pieces for your special day.</p>

        <div className="mb-12">
          <FeaturedCarousel />
        </div>

        <h2 className="font-serif text-2xl text-gray-dark mb-6">Featured pieces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_ITEMS.map((item) => (
            <Link key={item.title} to="/product/1" className="group block rounded-2xl overflow-hidden bg-white border border-gray-light shadow-sm card-hover card-shine">
              <div className="aspect-[3/4] overflow-hidden bg-gray-light">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-gray-dark">{item.title}</h3>
                <p className="text-pink mt-1">{item.price}</p>
                <p className="text-pink text-sm mt-2 group-hover:translate-x-1 inline-block transition-transform">View details →</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link to="/product/1">
            <Button>View featured item</Button>
          </Link>
        </p>
      </div>
    </main>
  )
}
