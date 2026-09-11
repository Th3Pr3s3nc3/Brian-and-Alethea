import { motion } from 'framer-motion'

interface InvitationTextProps {
  guestName?: string
}

export default function InvitationText({ guestName }: InvitationTextProps) {
  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
      >
        {/* Ornamental top */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-px bg-[#e8a0b4]" />
          <span className="text-[#e8a0b4] text-lg">❧</span>
          <div className="w-8 h-px bg-[#e8a0b4]" />
        </div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p
            className="text-[#8b5a6b] text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            The families of
          </p>
          <p
            className="text-[#5c3040] text-lg md:text-xl font-semibold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Mr. Ezrah Hagumimana & Ms. Beatrice Ingabire
          </p>
          <p className="text-[#8b5a6b] text-sm">and</p>
          <p
            className="text-[#5c3040] text-lg md:text-xl font-semibold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The Late James Habukiriro & Mrs. Betty Habukiriro
          </p>
        </motion.div>

        <motion.div
          className="mt-8 space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p
            className="text-[#8b5a6b] text-base md:text-lg italic"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Joyfully request the pleasure of the company of
          </p>
          <p
            className={`text-[#5c3040] md:text-lg ${guestName ? 'text-2xl font-semibold' : 'text-base'}`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {guestName || '………………………………………………………………………………………………'}
          </p>
          <p
            className="text-[#8b5a6b] text-base md:text-lg"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            to celebrate the Holy Matrimony of their children
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p
            className="text-3xl md:text-4xl text-[#5c3040]"
            style={{ fontFamily: 'Great Vibes, cursive' }}
          >
            Brian Haguma
          </p>
          <p
            className="text-[#e8a0b4] text-xl my-2"
            style={{ fontFamily: 'Great Vibes, cursive' }}
          >
            {'&'}
          </p>
          <p
            className="text-3xl md:text-4xl text-[#5c3040]"
            style={{ fontFamily: 'Great Vibes, cursive' }}
          >
            Alethea Lynn Akandwanirira
          </p>
        </motion.div>

        {/* Ornamental bottom */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-8 h-px bg-[#e8a0b4]" />
          <span className="text-[#e8a0b4] text-lg">❧</span>
          <div className="w-8 h-px bg-[#e8a0b4]" />
        </div>
      </motion.div>
    </section>
  )
}
