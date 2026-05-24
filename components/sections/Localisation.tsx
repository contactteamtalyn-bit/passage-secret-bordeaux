import { MapPin, Clock, Train } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const infos = [
  { icon: MapPin, t: 'Passage Sarget', d: '19 Cours de l’Intendance (14 Passage Sarget), 33000 Bordeaux.' },
  { icon: Clock, t: 'Horaires', d: 'Dîner Mar-Sam · 19h30-21h30. Déjeuner le samedi · 12h-13h30.' },
  { icon: Train, t: 'Accès', d: 'Tram B — Grand Théâtre · Tram C — Quinconces. Cœur du Triangle d’Or.' },
]

export function Localisation() {
  return (
    <section id="localisation" className="bg-[#F5F2EC] py-24 text-[#0D0C09] md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-[#C4A017]">← Nous trouver</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-5 font-libre text-[2.5rem] font-bold italic leading-[1.1] text-[#0D0C09]">
            Au cœur du
            <br />
            Triangle d&apos;Or.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col gap-4">
            {infos.map((it, i) => (
              <Reveal key={it.t} delay={120 + i * 80}>
                <div className="flex h-full items-start gap-4 border border-[#0D0C09]/10 bg-white/40 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D0C09] text-[#C4A017]">
                    <it.icon size={17} />
                  </span>
                  <div>
                    <p className="font-nunito text-[14px] font-bold text-[#0D0C09]">{it.t}</p>
                    <p className="mt-0.5 font-nunito text-[13.5px] font-light leading-relaxed text-[#0D0C09]/65">{it.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="h-full min-h-[340px] overflow-hidden border border-[#0D0C09]/15">
              <iframe
                title="Plan — Passage Secret, 19 Cours de l’Intendance, Bordeaux"
                src="https://maps.google.com/maps?q=19%20Cours%20de%20l'Intendance%2C%2033000%20Bordeaux&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full"
                style={{ border: 0, filter: 'grayscale(0.25) contrast(1.05)' }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
