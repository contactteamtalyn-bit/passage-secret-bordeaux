'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SmartImage } from '@/components/ui/SmartImage'
import { useDemoModal } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const menuItems = [
  { label: 'Le Restaurant', href: '#restaurant' },
  { label: 'Le Chef', href: '#chef' },
  { label: 'La Carte', href: '#carte' },
  { label: 'Privatisation', href: '#privatisation' },
]

const bullets = [
  'Mar-Sam · Dîner 19h30 – 21h30',
  'Sam · Déjeuner 12h – 13h30',
  'Privatisation disponible',
]

function HeroHeader() {
  const { open } = useDemoModal()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-[36px] z-50 transition-colors duration-500',
        scrolled ? 'border-b border-[#C4A017]/20 bg-[#0D0C09]/85 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <nav className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-libre text-xl font-bold italic tracking-[0.2em] text-[#C4A017]">
          PASSAGE SECRET
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {menuItems.map((m) => (
            <a key={m.href} href={m.href} className="font-nunito text-[13px] font-light tracking-wide text-[#F5F2EC]/70 transition-colors hover:text-[#C4A017]">
              {m.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={open}
            className="hidden border-[#C4A017]/40 font-nunito text-[#C4A017] hover:bg-[#C4A017]/10 hover:text-[#C4A017] sm:inline-flex"
          >
            Réserver
          </Button>
          <button onClick={() => setMenuOpen((v) => !v)} className="text-[#F5F2EC] lg:hidden" aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#C4A017]/20 bg-[#0D0C09]/95 backdrop-blur-lg lg:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {menuItems.map((m) => (
              <a key={m.href} href={m.href} onClick={() => setMenuOpen(false)} className="py-2 font-nunito text-[14px] text-[#F5F2EC]/80">
                {m.label}
              </a>
            ))}
            <button onClick={open} className="mt-2 rounded-md border border-[#C4A017]/40 px-5 py-3 font-nunito text-[13px] font-semibold uppercase tracking-wide text-[#C4A017]">
              Réserver
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export function Hero() {
  const { open } = useDemoModal()
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#0D0C09]">
      <HeroHeader />

      {/* Image droite */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[56%]">
        <SmartImage src="/images/hero/hero-main.jpg" alt="La salle du Passage Secret, Bordeaux" className="h-full w-full object-cover" />
        <div className="absolute inset-0 candlelight" />
        {/* Voile sombre pour la lisibilité du texte (mobile/tablette : image plein cadre) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0C09] via-[#0D0C09]/88 to-[#0D0C09]/45 lg:hidden" />
        {/* Desktop : l'image est à droite, masque dégradé sur son bord gauche */}
        <div className="absolute inset-0 hidden lg:block lg:bg-gradient-to-r lg:from-[#0D0C09] lg:from-[2%] lg:via-[#0D0C09]/55 lg:to-transparent" />
      </div>

      {/* Contenu */}
      <div className="wrap relative z-10 flex min-h-[100svh] items-center">
        <div className="max-w-xl py-32 lg:w-1/2">
          <div className="flex w-fit items-center gap-2 rounded-full border border-[#C4A017]/40 bg-[#C4A017]/10 px-4 py-1.5">
            <span className="font-nunito text-xs uppercase tracking-[0.2em] text-[#C4A017]">★ Guide Michelin 2025</span>
          </div>

          <h1 className="mt-8 font-libre text-4xl font-bold italic leading-[1.1] text-[#F5F2EC] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] md:text-5xl">
            Table gastronomique
            <br />
            <em className="not-italic text-[#C4A017]">au cœur de Bordeaux.</em>
          </h1>

          <p className="mt-6 max-w-lg font-nunito text-base font-light leading-relaxed text-[#F5F2EC]/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
            Niché dans le Passage Sarget, galerie couverte du XIXe siècle. À la nuit tombée, poussez la grille —
            découvrez les douces lumières. La cuisine française de Thomas Pasquereau vous attend.
          </p>

          <div className="my-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={open} className="bg-[#C4A017] px-6 font-nunito font-bold text-[#0D0C09] hover:bg-[#D4B017]">
              Réserver une table →
            </Button>
            <Button size="lg" variant="outline" onClick={open} className="border-[#C4A017]/40 font-nunito text-[#C4A017] hover:bg-[#C4A017]/10 hover:text-[#C4A017]">
              +33 7 82 16 46 59
            </Button>
          </div>

          <ul className="space-y-2 font-nunito text-sm text-[#F5F2EC]/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="text-[#C4A017]">◆</span> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
