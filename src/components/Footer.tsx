import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 px-4 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-px bg-[#e8a0b4]" />
          <span className="text-[#e8a0b4] text-xl">✝</span>
          <div className="w-12 h-px bg-[#e8a0b4]" />
        </div>

        <p
          className="text-3xl md:text-4xl text-[#5c3040] mb-3"
          style={{ fontFamily: 'Great Vibes, cursive' }}
        >
          Brian & Alethea
        </p>
        <p
          className="text-[#8b5a6b] text-sm tracking-wider"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Friday, 9th October 2026 • Kampala, Uganda
        </p>

        {/* Scripture */}
        <div className="mt-8 max-w-md mx-auto">
          <p
            className="text-[#8b5a6b] text-sm italic leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            "And over all these virtues put on love, which binds them all together in perfect unity."
          </p>
          <p className="text-[#e8a0b4] text-xs mt-2 tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            — Colossians 3:14
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <motion.a
            href="tel:+256701770050"
            className="w-10 h-10 rounded-full border border-[#e8a0b4] flex items-center justify-center text-[#e8a0b4] hover:bg-[#e8a0b4] hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Call to RSVP"
          >
            <span className="text-sm">📞</span>
          </motion.a>
          <motion.a
            href="sms:+256701770050"
            className="w-10 h-10 rounded-full border border-[#e8a0b4] flex items-center justify-center text-[#e8a0b4] hover:bg-[#e8a0b4] hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Send SMS"
          >
            <span className="text-sm">💬</span>
          </motion.a>
        </div>

        <p className="mt-8 text-[#b08999] text-xs tracking-wider opacity-60" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Made with love ♥
        </p>
      </motion.div>
    </footer>
  )
}
