const TIMELINE_ITEMS: { year: string; text: string; side: 'left' | 'right' }[] = [
  { year: '2010', text: 'Andreas Boutiques opened its first atelier with a focus on bespoke bridal wear.', side: 'left' },
  { year: '2015', text: 'Expanded into evening wear and launched our first ready-to-wear collection.', side: 'right' },
  { year: '2018', text: 'Moved to our current flagship store and introduced personal fitting appointments.', side: 'left' },
  { year: '2022', text: 'Launched online boutique and nationwide shipping for select collections.', side: 'right' },
  { year: '2025', text: 'Today we continue to craft timeless pieces for weddings and special occasions.', side: 'left' },
]

export function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="timeline-line absolute bg-pink/30 rounded-full" />
      <ul className="relative space-y-8 sm:space-y-10">
        {TIMELINE_ITEMS.map((item) => (
          <li key={item.year} className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pl-8 md:pl-0">
            {item.side === 'left' ? (
              <>
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <span className="font-serif text-xl text-pink">{item.year}</span>
                  <p className="text-gray-mid text-sm mt-1">{item.text}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-pink border-2 border-white shadow -translate-x-1/2 mt-1.5 md:mt-0" />
                <div className="md:w-1/2 md:pl-12 hidden md:block" />
              </>
            ) : (
              <>
                <div className="md:w-1/2 md:pr-12 hidden md:block" />
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-pink border-2 border-white shadow -translate-x-1/2 mt-1.5 md:mt-0" />
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <span className="font-serif text-xl text-pink">{item.year}</span>
                  <p className="text-gray-mid text-sm mt-1">{item.text}</p>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
