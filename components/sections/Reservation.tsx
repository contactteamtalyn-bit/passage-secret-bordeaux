import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function Reservation() {
  return (
    <section id="reservation" className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#0D0C09] py-24">
      <div className="candlelight pointer-events-none absolute inset-0" aria-hidden />
      <div className="wrap relative w-full text-center">
        <Reveal>
          <p className="font-nunito text-[12px] font-semibold uppercase tracking-[0.3em] text-[#C4A017]">Ce soir ?</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-libre font-bold italic leading-[1.04] text-[#F5F2EC]" style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}>
            Votre table
            <br />
            <em className="text-[#C4A017]">vous attend.</em>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-7 max-w-md font-nunito text-[18px] font-light text-[#F5F2EC]/55">
            Dîner Mar-Sam · 19h30 – 21h30 · Passage Sarget · Bordeaux.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <DemoCTA
              ariaLabel="Réserver"
              className="rounded-md bg-[#C4A017] px-8 py-4 font-nunito text-[14px] font-bold uppercase tracking-wide text-[#0D0C09] transition-transform hover:scale-[1.03]"
            >
              Réserver →
            </DemoCTA>
            <div className="flex flex-col items-center gap-1">
              <DemoCTA ariaLabel="Appeler" className="font-nunito text-[15px] font-light text-[#F5F2EC]/40 transition-colors hover:text-[#F5F2EC]/70">
                +33 7 82 16 46 59
              </DemoCTA>
              <DemoCTA ariaLabel="Écrire un email" className="font-nunito text-[13px] font-light text-[#F5F2EC]/30 transition-colors hover:text-[#F5F2EC]/60">
                passagesecret.restaurant@gmail.com
              </DemoCTA>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
