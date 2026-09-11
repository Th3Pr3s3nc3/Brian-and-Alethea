import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Envelope from './components/Envelope'
import FloatingPetals from './components/FloatingPetals'
import HeroSection from './components/HeroSection'
import InvitationText from './components/InvitationText'
import CountdownTimer from './components/CountdownTimer'
import EventDetails from './components/EventDetails'
import LoveStory from './components/LoveStory'
import RSVPForm from './components/RSVPForm'
import Footer from './components/Footer'
import MusicToggle from './components/MusicToggle'
import InvitationGenerator from './components/InvitationGenerator'
import './index.css'

function App() {
  const searchParams = new URLSearchParams(window.location.search)

  if (window.location.pathname.replace(/\/$/, '') === '/generator' || searchParams.has('generator')) {
    return <InvitationGenerator />
  }

  const guestName = searchParams.get('guest')?.trim() || ''
  const [isOpened, setIsOpened] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  const handleOpen = () => {
    setIsOpened(true)
    setIsMusicPlaying(true) // Start music when envelope opens
    setTimeout(() => setShowContent(true), 800)
  }

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying)
  }

  return (
    <div className="relative min-h-screen bg-[#fef5f7] overflow-hidden">
      <FloatingPetals active={showContent} />
      
      <AnimatePresence mode="wait">
        {!isOpened && (
          <Envelope key="envelope" onOpen={handleOpen} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="relative z-10"
          >
            <MusicToggle isPlaying={isMusicPlaying} onToggle={toggleMusic} />
            <HeroSection />
            <InvitationText guestName={guestName} />
            <CountdownTimer />
            <EventDetails />
            <LoveStory />
            <RSVPForm guestName={guestName} />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
