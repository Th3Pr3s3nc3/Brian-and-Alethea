import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 overflow-hidden">
      {/* Decorative SVG floral corners */}
      <svg className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 text-[#e8a0b4]/20" viewBox="0 0 200 200">
        <path d="M0,100 Q50,50 100,0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0,80 Q40,40 80,0" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M20,60 Q35,45 50,60 Q35,75 20,60" fill="currentColor" opacity="0.3" />
        <path d="M60,20 Q75,35 60,50 Q45,35 60,20" fill="currentColor" opacity="0.3" />
      </svg>
      <svg className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 text-[#e8a0b4]/20 -scale-x-100" viewBox="0 0 200 200">
        <path d="M0,100 Q50,50 100,0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0,80 Q40,40 80,0" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M20,60 Q35,45 50,60 Q35,75 20,60" fill="currentColor" opacity="0.3" />
        <path d="M60,20 Q75,35 60,50 Q45,35 60,20" fill="currentColor" opacity="0.3" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 text-[#e8a0b4]/20 -scale-y-100" viewBox="0 0 200 200">
        <path d="M0,100 Q50,50 100,0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0,80 Q40,40 80,0" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M20,60 Q35,45 50,60 Q35,75 20,60" fill="currentColor" opacity="0.3" />
        <path d="M60,20 Q75,35 60,50 Q45,35 60,20" fill="currentColor" opacity="0.3" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 text-[#e8a0b4]/20 -scale-x-100 -scale-y-100" viewBox="0 0 200 200">
        <path d="M0,100 Q50,50 100,0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0,80 Q40,40 80,0" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M20,60 Q35,45 50,60 Q35,75 20,60" fill="currentColor" opacity="0.3" />
        <path d="M60,20 Q75,35 60,50 Q45,35 60,20" fill="currentColor" opacity="0.3" />
      </svg>

      {/* Decorative top ornament */}
      <motion.div
        className="text-[#e8a0b4] text-4xl mb-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      >
        ✦
      </motion.div>

      {/* "Holy Matrimony" text */}
      <motion.p
        className="text-[#8b5a6b] tracking-[0.4em] uppercase text-xs md:text-sm mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        Holy Matrimony
      </motion.p>

      {/* Couple names */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h1
          className="text-5xl md:text-8xl text-[#5c3040] leading-tight"
          style={{ fontFamily: 'Great Vibes, cursive' }}
        >
          Brian
        </h1>
        <motion.div
          className="flex items-center justify-center my-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="w-16 md:w-24 h-px bg-[#e8a0b4]" />
          <span className="mx-4 text-[#e8a0b4] text-2xl" style={{ fontFamily: 'Great Vibes, cursive' }}>{'&'}</span>
          <div className="w-16 md:w-24 h-px bg-[#e8a0b4]" />
        </motion.div>
        <h1
          className="text-5xl md:text-8xl text-[#5c3040] leading-tight"
          style={{ fontFamily: 'Great Vibes, cursive' }}
        >
          Alethea
        </h1>
      </motion.div>

      {/* Date */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <p
          className="text-[#8b5a6b] text-lg md:text-xl tracking-wider"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Friday, the Ninth of October
        </p>
        <p
          className="text-[#8b5a6b] text-lg md:text-xl tracking-wider mt-1"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Two Thousand Twenty-Six
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#e8a0b4] rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-[#e8a0b4] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
