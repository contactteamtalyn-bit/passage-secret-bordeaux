import { MapPin, Phone, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0A0907] text-[#F5F2EC]">
      <div className="wrap py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-libre text-[22px] font-bold italic tracking-[0.12em] text-[#C4A017]">PASSAGE SECRET</p>
            <p className="mt-2 font-nunito text-[12px] font-light text-[#F5F2EC]/40">
              Table gastronomique · Thomas Pasquereau · Bordeaux
            </p>
            <span className="mt-5 inline-block border border-[#C4A017]/30 px-3 py-1.5 font-nunito text-[10px] uppercase tracking-[0.18em] text-[#C4A017]">
              ★ Guide Michelin 2025
            </span>
          </div>

          <div className="font-nunito text-[14px] font-light text-[#F5F2EC]/55">
            <p className="mb-4 font-nunito text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4A017]">Adresse</p>
            <p className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#C4A017]" />
              19 Cours de l&apos;Intendance
              <br />
              33000 Bordeaux
            </p>
          </div>

          <div className="font-nunito text-[14px] font-light text-[#F5F2EC]/55">
            <p className="mb-4 font-nunito text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4A017]">Contact</p>
            <a href="tel:+33782164659" className="flex items-center gap-2.5 transition-colors hover:text-[#F5F2EC]">
              <Phone size={15} className="shrink-0 text-[#C4A017]" />
              +33 7 82 16 46 59
            </a>
            <a
              href="https://instagram.com/passagesecret.restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2.5 transition-colors hover:text-[#F5F2EC]"
            >
              <Instagram size={15} className="shrink-0 text-[#C4A017]" />
              @passagesecret.restaurant
            </a>
          </div>
        </div>
      </div>

      {/* Bandeau anti-vol */}
      <div className="border-t border-[#F5F2EC]/10">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-nunito text-[11px] uppercase tracking-[0.16em] text-[#F5F2EC]/40">
            ⚠ Maquette démonstration non finale
          </p>
          <p className="font-nunito text-[11px] uppercase tracking-[0.16em] text-[#F5F2EC]/40">
            Site créé par Maison Talyn ·{' '}
            <a href="https://instagram.com/maison.talyn" target="_blank" rel="noopener noreferrer" className="text-[#C4A017] hover:underline">
              @maison.talyn
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
