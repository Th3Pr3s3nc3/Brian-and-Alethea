import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface MusicToggleProps {
  isPlaying: boolean
  onToggle: () => void
}

export default function MusicToggle({ isPlaying, onToggle }: MusicToggleProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const message = isPlaying 
        ? '{"event":"command","func":"playVideo","args":""}'
        : '{"event":"command","func":"pauseVideo","args":""}'
      iframeRef.current.contentWindow.postMessage(message, '*')
    }
  }, [isPlaying])

  return (
    <>
      {/* Hidden YouTube player */}
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/WLXjHK6fu_8?autoplay=1&enablejsapi=1&loop=1&playlist=WLXjHK6fu_8`}
        title="No One - CeCe Winans"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="fixed top-0 left-0 pointer-events-none opacity-0"
        style={{ position: 'absolute', zIndex: -1 }}
      />

      {/* Music toggle button */}
      <motion.button
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-[#f0c5d0] shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        onClick={onToggle}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isPlaying ? 'Mute music' : 'Unmute music'}
      >
        {isPlaying ? (
          <motion.div
            className="flex items-center gap-0.5"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-0.5 bg-[#e8a0b4] rounded-full"
                animate={{
                  height: [8, 16, 8],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>
        ) : (
          <span className="text-[#e8a0b4] text-lg">🔇</span>
        )}
      </motion.button>
    </>
  )
}
