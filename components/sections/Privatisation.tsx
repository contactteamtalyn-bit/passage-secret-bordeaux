import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function Privatisation() {
  return (
    <section id="privatisation" className="bg-[#C4A017] py-16 text-[#0D0C09] md:py-20">
      <div className="wrap grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="font-libre text-[2rem] font-bold italic leading-[1.15] text-[#0D0C09]">
              Un événement unique.
              <br />
              Dans un lieu unique.
            </h2>
            <p className="mt-4 max-w-md font-nunito text-[15px] font-light leading-relaxed text-[#0D0C09]/70">
              Privatisation du restaurant pour vos événements, anniversaires et repas d&apos;affaires. Bons
              cadeaux disponibles en ligne.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <DemoCTA
              ariaLabel="Privatiser le restaurant"
              className="rounded-md bg-[#0D0C09] px-6 py-3.5 font-nunito text-[13px] font-bold uppercase tracking-wide text-[#C4A017] transition-transform hover:scale-[1.02]"
            >
              Privatiser le restaurant →
            </DemoCTA>
            <DemoCTA
              ariaLabel="Offrir un bon cadeau"
              className="rounded-md border border-[#0D0C09]/40 px-6 py-3.5 font-nunito text-[13px] font-bold uppercase tracking-wide text-[#0D0C09] transition-colors hover:bg-[#0D0C09]/5"
            >
              Offrir un bon cadeau →
            </DemoCTA>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
