import { useEffect, useRef, useState } from 'react'
import { Copy, Download, ExternalLink, Heart } from 'lucide-react'
import { supabase } from '../supabaseClient'

const CARD_WIDTH = 1080
const CARD_HEIGHT = 1350

function drawInvitation(canvas: HTMLCanvasElement, guestName: string) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = CARD_WIDTH
  canvas.height = CARD_HEIGHT

  const gradient = ctx.createLinearGradient(0, 0, 0, CARD_HEIGHT)
  gradient.addColorStop(0, '#fef5f7')
  gradient.addColorStop(1, '#f9e5eb')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT)

  ctx.strokeStyle = '#e8a0b4'
  ctx.lineWidth = 3
  ctx.strokeRect(42, 42, CARD_WIDTH - 84, CARD_HEIGHT - 84)
  ctx.lineWidth = 1
  ctx.strokeRect(58, 58, CARD_WIDTH - 116, CARD_HEIGHT - 116)

  ctx.textAlign = 'center'
  ctx.fillStyle = '#d4869c'
  ctx.font = '34px "Cormorant Garamond", serif'
  ctx.fillText('YOU ARE CORDIALLY INVITED TO THE', CARD_WIDTH / 2, 140)

  ctx.fillStyle = '#5c3040'
  ctx.font = '92px "Great Vibes", cursive'
  ctx.fillText('Holy Matrimony', CARD_WIDTH / 2, 245)

  ctx.font = '102px "Great Vibes", cursive'
  ctx.fillText('Brian & Alethea', CARD_WIDTH / 2, 390)

  ctx.fillStyle = '#8b5a6b'
  ctx.font = '32px "Cormorant Garamond", serif'
  ctx.fillText('Together with their families, request the pleasure', CARD_WIDTH / 2, 485)
  ctx.fillText('of the company of', CARD_WIDTH / 2, 528)

  ctx.fillStyle = '#5c3040'
  ctx.font = 'bold 50px "Playfair Display", serif'
  ctx.fillText(guestName || 'Our Honoured Guest', CARD_WIDTH / 2, 610)
  ctx.strokeStyle = '#e8a0b4'
  ctx.beginPath()
  ctx.moveTo(260, 635)
  ctx.lineTo(820, 635)
  ctx.stroke()

  ctx.fillStyle = '#5c3040'
  ctx.font = 'bold 42px "Playfair Display", serif'
  ctx.fillText('FRIDAY, 9 OCTOBER 2026', CARD_WIDTH / 2, 725)

  ctx.font = 'bold 34px "Cormorant Garamond", serif'
  ctx.fillText('CHURCH SERVICE · 10:00 AM', CARD_WIDTH / 2, 815)
  ctx.font = '31px "Cormorant Garamond", serif'
  ctx.fillText("All Saints' Cathedral · Kampala, Uganda", CARD_WIDTH / 2, 858)

  ctx.font = 'bold 34px "Cormorant Garamond", serif'
  ctx.fillText('RECEPTION · 2:00 PM', CARD_WIDTH / 2, 940)
  ctx.font = '31px "Cormorant Garamond", serif'
  ctx.fillText('Palm Gardens · Kanyanya, Kampala', CARD_WIDTH / 2, 983)

  ctx.fillStyle = '#8b5a6b'
  ctx.font = '29px "Cormorant Garamond", serif'
  ctx.fillText('RSVP: Ms. Byunvuhoore Miriam Sebunyana', CARD_WIDTH / 2, 1080)
  ctx.font = 'bold 30px "Cormorant Garamond", serif'
  ctx.fillText('0701 770 050  ·  0777 865 661', CARD_WIDTH / 2, 1125)

  ctx.fillStyle = '#d4869c'
  ctx.font = '50px serif'
  ctx.fillText('❦', CARD_WIDTH / 2, 1210)
  ctx.fillStyle = '#8b5a6b'
  ctx.font = 'italic 25px "Cormorant Garamond", serif'
  ctx.fillText('“And over all these virtues put on love.” · Colossians 3:14', CARD_WIDTH / 2, 1260)
}

export default function InvitationGenerator() {
  const [guestName, setGuestName] = useState('')
  const [generatedName, setGeneratedName] = useState('')
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const invitationUrl = generatedName
    ? `${window.location.origin}${window.location.pathname.replace(/\/generator\/?$/, '/')}?guest=${encodeURIComponent(generatedName)}`
    : ''

  useEffect(() => {
    if (!generatedName || !canvasRef.current) return
    document.fonts.ready.then(() => drawInvitation(canvasRef.current!, generatedName))
  }, [generatedName])

    const generate = async (event: React.FormEvent) => {
    event.preventDefault()
    const cleanedName = guestName.trim().replace(/\s+/g, ' ')
    if (!cleanedName) return
    
    setGeneratedName(cleanedName)
    setCopied(false)

    // --- NEW CODE: Save to Supabase ---
    const currentUrl = window.location.origin + window.location.pathname.replace(/\/generator\/?$/, '/') + '?guest=' + encodeURIComponent(cleanedName);
    
    const { error } = await supabase
      .from('invitations')
      .insert([{ guest_name: cleanedName, invite_link: currentUrl, rsvp_status: 'pending' }])

    if (error) {
      console.error('Error saving invitation:', error)
    } else {
      console.log('Invitation saved to database!')
    }
    // ------------------------------------
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(invitationUrl)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const downloadPng = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = `${generatedName.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}-invitation.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fef5f7] to-[#f9e5eb] px-4 py-10 text-[#5c3040]">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <Heart className="mx-auto mb-4 text-[#d4869c]" fill="currentColor" />
          <p className="text-xs uppercase tracking-[0.35em] text-[#b06f83]">Brian & Alethea</p>
          <h1 className="mt-3 text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            Invitation Generator
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-[#8b5a6b]">
            Enter a guest's name to create their personal invitation link and a ready-to-share image.
          </p>
        </header>

        <section className="rounded-3xl border border-[#efc3cf] bg-white/80 p-6 shadow-xl md:p-9">
          <form onSubmit={generate} className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="guest-name">Guest's full name</label>
            <input
              id="guest-name"
              value={guestName}
              onChange={(event) => setGuestName(event.target.value)}
              placeholder="Guest's full name"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-xl border border-[#e8a0b4] bg-white px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-[#e8a0b4]/40"
            />
            <button className="rounded-xl bg-[#d4869c] px-7 py-4 font-semibold text-white shadow-md transition hover:bg-[#c47088]">
              Create invitation
            </button>
          </form>
        </section>

        {generatedName && (
          <section className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl border border-[#efc3cf] bg-white/80 p-6 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-[#b06f83]">Personal link</p>
              <p className="mt-2 text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>{generatedName}</p>
              <div className="mt-5 break-all rounded-xl bg-[#fef5f7] p-4 text-sm text-[#8b5a6b]">{invitationUrl}</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <button onClick={copyLink} className="flex items-center justify-center gap-2 rounded-xl border border-[#d4869c] px-4 py-3 font-semibold text-[#a85f75] hover:bg-[#fce8ed]">
                  <Copy size={18} /> {copied ? 'Copied!' : 'Copy link'}
                </button>
                <a href={invitationUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-[#d4869c] px-4 py-3 font-semibold text-[#a85f75] hover:bg-[#fce8ed]">
                  <ExternalLink size={18} /> Preview website
                </a>
                <button onClick={downloadPng} className="flex items-center justify-center gap-2 rounded-xl bg-[#d4869c] px-4 py-3 font-semibold text-white hover:bg-[#c47088] sm:col-span-2 lg:col-span-1">
                  <Download size={18} /> Download PNG
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#efc3cf] bg-white p-3 shadow-xl">
              <canvas ref={canvasRef} className="h-auto w-full rounded-2xl" aria-label={`Invitation card for ${generatedName}`} />
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
