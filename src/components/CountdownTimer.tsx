import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CountdownTimer() {
  const weddingDate = new Date('2026-10-09T10:00:00')
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = new Date()
    const diff = weddingDate.getTime() - now.getTime()
    
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="text-[#8b5a6b] tracking-[0.3em] uppercase text-xs mb-2"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Counting down to our special day
        </p>
        
        <div className="flex items-center justify-center gap-3 md:gap-6 mt-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl bg-white/80 backdrop-blur-sm border border-[#f0c5d0] shadow-lg flex items-center justify-center">
                <motion.span
                  key={unit.value}
                  className="text-2xl md:text-4xl text-[#5c3040] font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
              </div>
              <span
                className="mt-2 text-[#8b5a6b] text-xs md:text-sm tracking-wider"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
