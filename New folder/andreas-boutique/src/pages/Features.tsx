import { Link } from 'react-router-dom'

const FEATURES_MAIN = [
  { title: 'Free Shipping', desc: 'On orders over $500. Express delivery available.', color: 'bg-pink/10', iconColor: 'text-pink' },
  { title: 'Secure Payment', desc: 'SSL encrypted. All major cards accepted.', color: 'bg-coral/10', iconColor: 'text-coral' },
  { title: 'Easy Returns', desc: '14-day returns on ready-to-wear. See ', color: 'bg-mint/20', iconColor: 'text-mint', termsLink: true },
  { title: 'Personal Fitting', desc: 'Book a consultation at our boutique. Contact us.', color: 'bg-violet/10', iconColor: 'text-violet' },
]

const FEATURES_EXTRA = [
  { title: 'Handcrafted Quality', desc: 'Every piece is finished by skilled artisans.' },
  { title: 'Made to Order', desc: 'Bridal & custom sizes available on request.' },
]

export function Features() {
  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-dark mb-4 sm:mb-6">Why Andreas</h1>
        <p className="text-gray-mid mb-10 sm:mb-12 text-sm sm:text-base max-w-xl">We make your special day easier with services you can trust.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURES_MAIN.map((f) => (
            <div key={f.title} className="feature-card p-6 rounded-2xl bg-gray-soft border border-gray-light/80 text-center">
              <div className={`w-14 h-14 rounded-full ${f.color} flex items-center justify-center mx-auto mb-4 feature-icon`}>
                <span className={`text-2xl ${f.iconColor}`}>•</span>
              </div>
              <h2 className="font-serif text-lg text-gray-dark mb-2">{f.title}</h2>
              <p className="text-sm text-gray-mid">{f.desc}{'termsLink' in f && f.termsLink ? <><Link to="/terms" className="text-pink hover:underline">terms</Link>.</> : null}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6 max-w-4xl mx-auto">
          {FEATURES_EXTRA.map((f) => (
            <div key={f.title} className="feature-card p-6 rounded-2xl bg-pink-light/20 border border-pink/20 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-pink/15 flex items-center justify-center flex-shrink-0 feature-icon">
                <span className="w-6 h-6 text-pink">✦</span>
              </div>
              <div>
                <h3 className="font-serif text-lg text-gray-dark mb-1">{f.title}</h3>
                <p className="text-sm text-gray-mid">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-mid">
          <Link to="/contact" className="text-pink hover:underline">Contact us</Link> for appointments or questions.
        </p>
      </div>
    </main>
  )
}
