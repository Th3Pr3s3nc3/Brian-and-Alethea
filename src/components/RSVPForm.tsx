import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RSVPFormProps {
  guestName?: string
}

export default function RSVPForm({ guestName = '' }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: guestName,
    email: '',
    attending: '',
    guests: '1',
    dietary: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
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
            Kindly Respond
          </p>
          <h2
            className="text-3xl md:text-5xl text-[#5c3040]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            RSVP
          </h2>
          <div className="w-24 h-px bg-[#e8a0b4] mx-auto mt-4" />
        </motion.div>

        {/* Coordinator info */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#f0c5d0] shadow-lg mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#8b5a6b] text-sm tracking-wider mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            RSVP Coordinator
          </p>
          <p className="text-[#5c3040] text-lg font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ms. Byunvuhoore Miriam Sebunyana
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
            <a
              href="tel:+256701770050"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8a0b4]/10 border border-[#e8a0b4] text-[#5c3040] text-sm hover:bg-[#e8a0b4] hover:text-white transition-colors"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span>📞</span> 0701 770 050
            </a>
            <a
              href="tel:+256777865661"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8a0b4]/10 border border-[#e8a0b4] text-[#5c3040] text-sm hover:bg-[#e8a0b4] hover:text-white transition-colors"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span>📞</span> 0777 865 661
            </a>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#f0c5d0] shadow-lg space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Name */}
              <div>
                <label className="block text-[#5c3040] text-sm mb-2 tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#f0c5d0] bg-white/50 focus:outline-none focus:border-[#e8a0b4] focus:ring-1 focus:ring-[#e8a0b4] transition-colors text-[#5c3040]"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#5c3040] text-sm mb-2 tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#f0c5d0] bg-white/50 focus:outline-none focus:border-[#e8a0b4] focus:ring-1 focus:ring-[#e8a0b4] transition-colors text-[#5c3040]"
                  placeholder="your@email.com"
                />
              </div>

              {/* Attending */}
              <div>
                <label className="block text-[#5c3040] text-sm mb-2 tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Will you attend? *
                </label>
                <div className="flex gap-4">
                  {['Joyfully Accept', 'Regretfully Decline'].map((option) => (
                    <label
                      key={option}
                      className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                        formData.attending === option
                          ? 'border-[#e8a0b4] bg-[#e8a0b4]/10 text-[#5c3040]'
                          : 'border-[#f0c5d0] bg-white/50 text-[#8b5a6b] hover:border-[#e8a0b4]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value={option}
                        checked={formData.attending === option}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Number of guests */}
              {formData.attending === 'Joyfully Accept' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="block text-[#5c3040] text-sm mb-2 tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#f0c5d0] bg-white/50 focus:outline-none focus:border-[#e8a0b4] focus:ring-1 focus:ring-[#e8a0b4] transition-colors text-[#5c3040]"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>

                  {/* Dietary */}
                  <div className="mt-4">
                    <label className="block text-[#5c3040] text-sm mb-2 tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Dietary Requirements
                    </label>
                    <input
                      type="text"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#f0c5d0] bg-white/50 focus:outline-none focus:border-[#e8a0b4] focus:ring-1 focus:ring-[#e8a0b4] transition-colors text-[#5c3040]"
                      placeholder="Any allergies or preferences?"
                    />
                  </div>
                </motion.div>
              )}

              {/* Message */}
              <div>
                <label className="block text-[#5c3040] text-sm mb-2 tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  A message for the couple
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-[#f0c5d0] bg-white/50 focus:outline-none focus:border-[#e8a0b4] focus:ring-1 focus:ring-[#e8a0b4] transition-colors text-[#5c3040] resize-none"
                  placeholder="Share your blessings and wishes..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-[#e8a0b4] to-[#d4869c] text-white font-medium tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send RSVP ✦
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 border border-[#f0c5d0] shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <motion.div
                className="text-5xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                💌
              </motion.div>
              <h3
                className="text-2xl text-[#5c3040] mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Thank You!
              </h3>
              <p className="text-[#8b5a6b]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Your response has been received. Brian & Alethea look forward to celebrating with you!
              </p>
              <motion.div
                className="mt-6 text-[#e8a0b4] text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ♥
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
