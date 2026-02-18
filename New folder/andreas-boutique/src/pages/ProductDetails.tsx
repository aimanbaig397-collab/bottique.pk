import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ShoppingBag } from 'lucide-react'

export function ProductDetails() {
  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Link to="/collections" className="inline-flex items-center gap-2 text-gray-mid hover:text-pink text-sm mb-8 transition-colors">← Back to Collections</Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-light">
            <img src="https://images.unsplash.com/photo-1594552072238-fb33e84ebf63?w=800&q=85" alt="Bridal gown" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-sans text-xs letter-wide uppercase text-pink mb-2">Bridal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-dark mb-4">Elegant Lace Wedding Gown</h1>
            <p className="text-2xl text-pink font-serif mb-6">$2,499.00</p>
            <p className="text-gray-mid mb-6">Hand-finished lace and silk tulle. Fitted bodice with delicate embroidery and a flowing skirt. Available in ivory and blush. Made to order with optional customization.</p>
            <ul className="space-y-2 text-sm text-gray-mid mb-8">
              <li>• Silk tulle & lace</li>
              <li>• Sizes: 2–14 (custom available)</li>
              <li>• Delivery: 8–12 weeks</li>
            </ul>
            <form className="space-y-4">
              <div className="flex gap-4 items-center">
                <Label>Quantity</Label>
                <Input type="number" name="qty" defaultValue={1} min={1} max={5} className="w-20" />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Add to cart
                <ShoppingBag className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
