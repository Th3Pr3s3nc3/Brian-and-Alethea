import { motion } from 'framer-motion'

export default function LoveStory() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-[#fce8ed]/50 to-transparent">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[#e8a0b4] tracking-[0.3em] uppercase text-xs mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Scripture
          </p>
          <h2
            className="text-3xl md:text-5xl text-[#5c3040]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Blessing
          </h2>
          <div className="w-24 h-px bg-[#e8a0b4] mx-auto mt-4" />
        </motion.div>

        {/* Verse */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-[#f0c5d0] shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-4xl mb-6">✝</div>
          <p
            className="text-xl md:text-2xl text-[#5c3040] italic leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            "Therefore what God has joined together, let no one separate."
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-[#e8a0b4]" />
            <span className="text-[#e8a0b4] text-sm tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Mark 10:9
            </span>
            <div className="w-12 h-px bg-[#e8a0b4]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
