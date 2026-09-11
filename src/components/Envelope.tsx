import { motion } from 'framer-motion'
import { useState } from 'react'

interface EnvelopeProps {
  onOpen: () => void
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#fef5f7] to-[#fce8ed]"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#e8a0b4]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Pre-text */}
      <motion.p
        className="text-[#8b5a6b] font-light tracking-[0.3em] uppercase text-sm mb-8 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        You are cordially invited
      </motion.p>

      {/* Envelope */}
      <motion.div
        className="relative cursor-pointer"
        onClick={onOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Envelope body */}
        <div className="relative w-72 h-48 md:w-96 md:h-64">
          {/* Back of envelope */}
          <div className="absolute inset-0 bg-[#fce8ed] rounded-lg shadow-2xl border border-[#f0c5d0]" />
          
          {/* Envelope flap (triangle) */}
          <motion.div
            className="absolute top-0 left-0 right-0 origin-top"
            style={{ height: '50%' }}
            animate={isHovered ? { rotateX: 40 } : { rotateX: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <path
                d="M0,0 L200,150 L400,0 L400,0 L0,0 Z"
                fill="#f5d5dc"
                stroke="#f0c5d0"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Letter peeking out */}
          <motion.div
            className="absolute top-4 left-4 right-4 bg-white rounded shadow-lg flex items-center justify-center"
            style={{ height: '70%' }}
            animate={isHovered ? { y: -20 } : { y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center p-4">
              <p className="text-[#e8a0b4] text-2xl md:text-3xl" style={{ fontFamily: 'Great Vibes, cursive' }}>
                B & A
              </p>
              <div className="w-12 h-px bg-[#e8a0b4] mx-auto my-2" />
              <p className="text-[#8b5a6b] text-xs tracking-widest uppercase">
                Holy Matrimony
              </p>
            </div>
          </motion.div>

          {/* Front flap overlay */}
          <svg viewBox="0 0 400 260" className="absolute bottom-0 left-0 w-full" style={{ height: '60%' }}>
            <path
              d="M0,260 L200,100 L400,260 Z"
              fill="#f8e0e8"
              stroke="#f0c5d0"
              strokeWidth="1"
            />
          </svg>

          {/* Wax seal */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#e8a0b4] to-[#c47088] shadow-lg flex items-center justify-center"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white text-lg font-bold" style={{ fontFamily: 'Great Vibes, cursive' }}>
              ♥
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Tap instruction */}
      <motion.p
        className="mt-10 text-[#b08999] text-sm tracking-wider animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        ✦ Tap to open ✦
      </motion.p>
    </motion.div>
  )
}
