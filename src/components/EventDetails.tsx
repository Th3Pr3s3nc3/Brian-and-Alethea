import { motion } from 'framer-motion'

const events = [
  {
    icon: '⛪',
    title: 'Church Service',
    time: '10:00 AM',
    venue: "All Saints' Cathedral",
    address: 'Kampala, Uganda',
    description: 'Join us as we celebrate the Holy Matrimony of Brian and Alethea in a blessed church ceremony.',
  },
  {
    icon: '🥂',
    title: 'Reception',
    time: '2:00 PM',
    venue: 'Palm Gardens',
    address: 'Kanyanya, Kampala',
    description: 'Continue the celebration with food, drinks, music, and dancing at the reception.',
  },
]

export default function EventDetails() {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-[#e8a0b4] tracking-[0.3em] uppercase text-xs mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            When & Where
          </p>
          <h2
            className="text-3xl md:text-5xl text-[#5c3040]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Wedding Details
          </h2>
          <div className="w-24 h-px bg-[#e8a0b4] mx-auto mt-4" />
        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#f0c5d0] shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{event.icon}</div>
              <h3
                className="text-2xl text-[#5c3040] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {event.title}
              </h3>
              <p className="text-[#e8a0b4] text-lg font-semibold mb-1">
                {event.time}
              </p>
              <p className="text-[#5c3040] font-medium" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {event.venue}
              </p>
              <p className="text-[#8b5a6b] text-sm mt-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {event.address}
              </p>
              <p className="text-[#8b5a6b] text-sm mt-3 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {event.description}
              </p>
              
              <motion.button
                className="mt-5 px-5 py-2 rounded-full border border-[#e8a0b4] text-[#8b5a6b] text-sm tracking-wider hover:bg-[#e8a0b4] hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (event.title === 'Church Service') {
                    window.open('https://www.google.com/maps/search/All+Saints+Cathedral+Kampala', '_blank')
                  } else {
                    window.open('https://www.google.com/maps/search/Palm+Gardens+Kanyanya+Kampala', '_blank')
                  }
                }}
              >
                View on Map →
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Date reminder */}
        <motion.div
          className="mt-12 text-center bg-white/50 rounded-xl p-6 border border-[#f0c5d0]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-[#8b5a6b] text-sm tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            <span className="text-lg mr-2">📅</span>
            <span className="font-semibold text-[#5c3040]">Save the Date:</span>
            {' '}Friday, 9th October 2026
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
