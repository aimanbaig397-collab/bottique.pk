import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

export function Checkout() {
  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-dark mb-2">Checkout</h1>
        <p className="font-sans text-gray-mid mb-10">Complete your order below.</p>

        <form className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <section className="p-6 bg-white rounded-2xl border border-gray-light shadow-sm">
              <h2 className="font-serif text-xl text-gray-dark mb-4">Shipping address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first">First name</Label>
                    <Input id="first" required />
                  </div>
                  <div>
                    <Label htmlFor="last">Last name</Label>
                    <Input id="last" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP</Label>
                    <Input id="zip" required />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <div className="p-6 bg-white rounded-2xl border border-gray-light shadow-sm sticky top-28">
              <h3 className="font-serif text-xl text-gray-dark mb-4">Order summary</h3>
              <ul className="space-y-3 text-gray-dark/90">
                <li className="flex justify-between text-sm">
                  <span>Elegant Lace Wedding Gown × 1</span>
                  <span>$2,499.00</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Pearl Veil & Gloves Set × 1</span>
                  <span>$349.00</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-light space-y-2 text-gray-mid text-sm">
                <div className="flex justify-between"><span>Subtotal</span><span>$2,848.00</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>TBD</span></div>
              </div>
              <div className="flex justify-between font-serif text-xl text-gray-dark mt-4 pt-4 border-t border-gray-light">
                <span>Total</span><span className="text-pink">$2,848.00</span>
              </div>
              <p className="mt-4 text-xs text-gray-mid">By placing your order you agree to our <Link to="/terms" className="text-pink hover:underline">Terms</Link>.</p>
              <Button type="submit" className="mt-6 w-full" size="lg">Place order</Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
