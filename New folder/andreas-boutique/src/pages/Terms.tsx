import { Link } from 'react-router-dom'

export function Terms() {
  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-dark mb-2">Terms & Conditions</h1>
        <p className="text-gray-mid text-sm mb-12">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-dark/90">
          <section>
            <h2 className="font-serif text-xl text-gray-dark mb-2">1. General</h2>
            <p className="text-sm">These terms govern your use of Andreas Boutiques website and services. By placing an order or using our site, you agree to these terms.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-gray-dark mb-2">2. Orders & Payment</h2>
            <p className="text-sm">All orders are subject to availability. We accept major credit cards and reserve the right to refuse or cancel orders. Prices are in USD and do not include shipping unless stated.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-gray-dark mb-2">3. Shipping & Returns</h2>
            <p className="text-sm">Shipping times and costs are shown at checkout. Ready-to-wear items may be returned within 14 days in unworn condition. Custom and made-to-order items are final sale unless otherwise agreed.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-gray-dark mb-2">4. Contact</h2>
            <p className="text-sm">For questions about these terms, please <Link to="/contact" className="text-pink hover:underline">contact us</Link>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
