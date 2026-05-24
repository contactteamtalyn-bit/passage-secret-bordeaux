import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'

const parcours = [
  { t: 'Coutanceau', s: '2 étoiles Michelin' },
  { t: 'Cambodge', s: 'Ambassade de France' },
  { t: 'Paris', s: 'Garde Républicaine' },
  { t: 'Ferrandi', s: 'Chef formateur' },
]

export function LeChef() {
  return (
    <section id="chef" className="bg-[#F5F2EC] py-24 text-[#0D0C09] md:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[40fr_60fr] lg:gap-16">
        {/* Photo cuisine (pas de portrait) — clip-path biseauté */}
        <Reveal>
          <div
            className="overflow-hidden border-r-[3px] border-[#C4A017]"
            style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)' }}
          >
            <SmartImage
              src="/images/chef/cuisine.jpg"
              alt="Une création gastronomique de Thomas Pasquereau"
              className="h-[500px] w-full object-cover"
              fallbackLabel="Cuisine du chef"
            />
          </div>
        </Reveal>

        {/* Texte */}
        <div>
          <Reveal>
            <p className="eyebrow text-[#C4A017]">← Le chef</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-libre text-[3rem] font-bold italic leading-[1.1] text-[#0D0C09]">
              Thomas Pasquereau.
              <br />
              <em className="text-[#C4A017]">25 ans de passion.</em>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 font-nunito text-[16px] font-light leading-[1.8] text-[#0D0C09]/70">
              Formé auprès de Richard Coutanceau (2 étoiles Michelin), chef exécutif à l&apos;Ambassade de France
              au Cambodge, responsable du pôle restauration de la Garde Républicaine, puis chef formateur à
              Ferrandi Paris. Aujourd&apos;hui, il signe au Passage Secret une interprétation personnelle de la
              haute cuisine française.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-4 font-nunito text-[15px] font-light leading-[1.8] text-[#0D0C09]/60">
              Sa cuisine raconte un voyage sensoriel. Des jus, des sauces que plus personne ne fait. Des
              fermentations, des épices, des herbes — jusqu&apos;au beurre de table agrémenté d&apos;ail des ours
              récolté dans la forêt girondine.
            </p>
          </Reveal>

          {/* Timeline parcours */}
          <Reveal delay={320}>
            <div className="hide-scrollbar mt-8 flex gap-8 overflow-x-auto border-t border-[#0D0C09]/10 pt-6">
              {parcours.map((p) => (
                <div key={p.t} className="shrink-0">
                  <p className="font-nunito text-[13px] font-bold uppercase tracking-wide text-[#C4A017]">{p.t}</p>
                  <p className="mt-1 font-nunito text-[12px] font-light text-[#0D0C09]/60">{p.s}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
