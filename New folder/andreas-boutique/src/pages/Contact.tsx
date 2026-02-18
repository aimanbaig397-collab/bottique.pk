import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen w-full">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-dark mb-2">Contact Us</h1>
        <p className="font-sans text-gray-mid mb-8 sm:mb-12 text-sm sm:text-base">Get in touch for orders, appointments, or any questions.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 w-full">
          <div>
            <h2 className="font-serif text-xl text-gray-dark mb-4">Send a message</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="Your message" required />
              </div>
              <Button type="submit" className="w-full">Send message</Button>
            </form>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gray-dark mb-4">Visit or call</h2>
            <ul className="space-y-4 text-gray-dark/90">
              <li className="flex gap-3">
                <span className="text-pink">📍</span>
                <span>123 Boutique Street, Fashion District<br />City, State 12345</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink">📞</span>
                <a href="tel:+1234567890" className="hover:text-pink transition-colors">+1 (234) 567-8900</a>
              </li>
              <li className="flex gap-3">
                <span className="text-pink">✉️</span>
                <a href="mailto:hello@andreasboutiques.com" className="hover:text-pink transition-colors">hello@andreasboutiques.com</a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-mid">Boutique hours: Mon–Sat 10AM–7PM</p>
          </div>
        </div>
      </div>
    </main>
  )
}
