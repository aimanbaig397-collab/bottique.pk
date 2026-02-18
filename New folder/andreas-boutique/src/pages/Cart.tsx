import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

const CART_ITEMS = [
  { title: 'Elegant Lace Wedding Gown', price: '$2,499.00', img: 'https://images.unsplash.com/photo-1594552072238-fb33e84ebf63?w=300&q=85', qty: 1 },
  { title: 'Pearl Veil & Gloves Set', price: '$349.00', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&q=85', qty: 1 },
]

export function Cart() {
  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-dark mb-2">Your Cart</h1>
        <p className="font-sans text-gray-mid mb-10">Review your items and proceed to checkout.</p>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {CART_ITEMS.map((item) => (
              <Card key={item.title} className="flex flex-col sm:flex-row gap-6 p-6">
                <div className="w-full sm:w-28 h-36 flex-shrink-0 rounded-lg overflow-hidden bg-gray-light">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="flex-1 min-w-0 p-0">
                  <h2 className="font-serif text-xl text-gray-dark">{item.title}</h2>
                  <p className="text-pink mt-1">{item.price}</p>
                  <div className="mt-3 flex items-center gap-4">
                    <label className="text-sm text-gray-mid">Qty</label>
                    <Input type="number" defaultValue={item.qty} min={1} className="w-16 px-2 py-1" />
                    <button type="button" className="text-gray-mid hover:text-coral text-sm">Remove</button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <Card className="p-6 sticky top-28">
              <h3 className="font-serif text-xl text-gray-dark mb-4">Order summary</h3>
              <ul className="space-y-3 text-gray-dark/90">
                {CART_ITEMS.map((item) => (
                  <li key={item.title} className="flex justify-between text-sm">
                    <span>{item.title} × {item.qty}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-light space-y-2 text-gray-mid text-sm">
                <div className="flex justify-between"><span>Subtotal</span><span>$2,848.00</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>TBD</span></div>
              </div>
              <div className="flex justify-between font-serif text-xl text-gray-dark mt-4 pt-4 border-t border-gray-light">
                <span>Total</span><span className="text-pink">$2,848.00</span>
              </div>
              <Link to="/checkout" className="block mt-6">
                <Button className="w-full" size="lg">Proceed to checkout</Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
