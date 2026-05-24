import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'

export function LesPlats() {
  return (
    <section id="carte" className="bg-[#0D0C09] py-24 md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-[#C4A017]">← Les créations</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-5 font-libre text-[3rem] font-bold italic leading-[1.1] text-[#F5F2EC]">
            Des assiettes
            <br />
            qui racontent.
          </h2>
        </Reveal>

        {/* L asymétrique */}
        <Reveal delay={160}>
          <div className="mt-12 grid gap-4 lg:grid-cols-[60fr_38fr]">
            {/* Plat A — grande */}
            <div className="group relative overflow-hidden">
              <SmartImage
                src="/images/plats/plat-01.jpg"
                alt="La création signature"
                className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-[450px]"
                fallbackLabel="Plat à venir"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0C09]/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[#C4A017]/0 transition-colors duration-500 group-hover:bg-[#C4A017]/10" />
              <p className="pointer-events-none absolute bottom-5 left-5 font-libre text-[16px] italic text-[#C4A017]">
                La signature du chef · produits du terroir
              </p>
            </div>

            {/* Colonne droite : Plat B + Plat C */}
            <div className="flex flex-col gap-5 pt-2">
              <div className="group relative rotate-[1.5deg] overflow-hidden border border-[#C4A017]/30 shadow-xl shadow-black/40">
                <SmartImage src="/images/plats/plat-02.jpg" alt="Création de saison" className="h-[210px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" fallbackLabel="Plat à venir" />
                <div className="pointer-events-none absolute inset-0 bg-[#C4A017]/0 transition-colors duration-500 group-hover:bg-[#C4A017]/12" />
              </div>
              <div className="group relative -rotate-1 overflow-hidden border border-[#C4A017]/25 shadow-xl shadow-black/40">
                <SmartImage src="/images/plats/plat-03.jpg" alt="Création de saison" className="h-[210px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" fallbackLabel="Plat à venir" />
                <div className="pointer-events-none absolute inset-0 bg-[#C4A017]/0 transition-colors duration-500 group-hover:bg-[#C4A017]/12" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Plat D — bande horizontale */}
        <Reveal delay={220}>
          <div className="group relative mt-4 overflow-hidden">
            <SmartImage
              src="/images/plats/plat-04.jpg"
              alt="Création de saison"
              className="h-[160px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 30%' }}
              fallbackLabel="Plat à venir"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#C4A017]/0 transition-colors duration-500 group-hover:bg-[#C4A017]/10" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
