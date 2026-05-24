import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'

export function LExperience() {
  return (
    <section className="bg-[#2A2820] py-24 text-[#F5F2EC] md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-[#C4A017]">← L&apos;expérience</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-5 font-libre text-[3rem] font-bold italic leading-[1.1] text-[#F5F2EC]">
            Un repas.
            <br />
            Une révélation.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8">
          {/* Card 1 — flush left */}
          <Reveal className="lg:w-[72%] lg:self-start">
            <div className="grid items-center gap-6 border border-[#C4A017]/20 bg-[#0D0C09] p-8 md:grid-cols-[1fr_0.85fr]">
              <div>
                <h3 className="font-libre text-[22px] italic text-[#F5F2EC]">Un lieu à double vie</h3>
                <p className="mt-3 font-nunito text-[15px] font-light leading-relaxed text-[#F5F2EC]/60">
                  Galerie le jour. Restaurant confidentiel le soir. Un cadre hors du temps, dans un passage
                  couvert du XIXe siècle.
                </p>
              </div>
              <div className="overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)' }}>
                <SmartImage src="/images/terrasse/terrasse-01.jpg" alt="Le passage couvert" className="h-[200px] w-full object-cover" />
              </div>
            </div>
          </Reveal>

          {/* Card 2 — flush right */}
          <Reveal className="lg:w-[72%] lg:self-end" delay={120}>
            <div className="grid items-center gap-6 border border-[#C4A017]/20 bg-[#0D0C09] p-8 md:grid-cols-[0.85fr_1fr]">
              <div className="overflow-hidden md:order-1" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 88%)' }}>
                <SmartImage src="/images/plats/plat-01.jpg" alt="Une assiette signature" className="h-[200px] w-full object-cover" />
              </div>
              <div className="md:order-2">
                <h3 className="font-libre text-[22px] italic text-[#F5F2EC]">Raffiné sans jamais être guindé</h3>
                <p className="mt-3 font-nunito text-[15px] font-light leading-relaxed text-[#F5F2EC]/60">
                  Un nombre limité de couverts pour que chaque table compte. Un service attentif, spontané. On
                  s&apos;y sent vite comme chez soi.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3 — flush left, badge KM 0 */}
          <Reveal className="lg:w-[72%] lg:self-start" delay={240}>
            <div className="grid items-center gap-6 border border-[#C4A017]/20 bg-[#0D0C09] p-8 md:grid-cols-[1fr_0.5fr]">
              <div>
                <h3 className="font-libre text-[22px] italic text-[#F5F2EC]">La Nouvelle-Aquitaine dans votre assiette</h3>
                <p className="mt-3 font-nunito text-[15px] font-light leading-relaxed text-[#F5F2EC]/60">
                  Champignons de la Cave Agricole à 3 km. Légumes en aquaponie de De l&apos;Eau à la Bouche.
                  Caviar de Neuvic. Produits paysans de Racé.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full border border-[#C4A017] font-libre text-[1.4rem] italic text-[#C4A017]">
                  KM&nbsp;0
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
