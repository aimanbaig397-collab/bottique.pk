import { Link } from 'react-router-dom'

const ITEMS = [
  { title: 'Bridal', img: 'https://images.unsplash.com/photo-1594552072238-fb33e84ebf63?w=600&q=85', alt: 'Bridal collection' },
  { title: 'Evening Gowns', img: 'https://images.unsplash.com/photo-1566174053879-31525623c5d6?w=600&q=85', alt: 'Evening gowns' },
  { title: 'Fancy Articles', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85', alt: 'Fancy articles' },
]

export function Collections() {
  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 min-h-screen w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-dark mb-6 sm:mb-10">Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
          {ITEMS.map((item) => (
            <Link
              key={item.title}
              to="/product/1"
              className="group block rounded-2xl overflow-hidden bg-white border border-gray-light shadow-sm card-hover card-shine min-w-0 w-full"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-light w-full">
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 max-w-full" loading="lazy" />
              </div>
              <div className="p-4 sm:p-5">
                <h2 className="font-serif text-lg sm:text-xl text-gray-dark">{item.title}</h2>
                <p className="text-pink text-sm transition-transform duration-300 group-hover:translate-x-1 inline-block">View details →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
