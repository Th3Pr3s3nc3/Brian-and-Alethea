import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface FloatingPetalsProps {
  active: boolean
}

export default function FloatingPetals({ active }: FloatingPetalsProps) {
  const petals = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 8 + Math.random() * 16,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 8,
      type: Math.random() > 0.5 ? 'petal' : 'heart',
    }))
  }, [])

  if (!active) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-5%',
            fontSize: petal.size,
          }}
          initial={{ y: -50, rotate: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
            opacity: [0, 0.7, 0.7, 0],
            x: [0, Math.sin(petal.id) * 80, Math.cos(petal.id) * -60, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {petal.type === 'petal' ? (
            <span className="text-[#f0a0b4] drop-shadow-sm">🌸</span>
          ) : (
            <span className="text-[#e8a0b4] drop-shadow-sm opacity-60">♥</span>
          )}
        </motion.div>
      ))}
    </div>
  )
}
