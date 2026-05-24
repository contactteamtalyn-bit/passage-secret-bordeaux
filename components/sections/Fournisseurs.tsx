import { Reveal } from '@/components/ui/Reveal'

const fournisseurs = [
  { n: 'Cave Agricole', d: 'Champignons bio urbains · Floirac · 3 km' },
  { n: 'De l’Eau à la Bouche', d: 'Légumes en aquaponie · Bordeaux' },
  { n: 'Caviar de Neuvic', d: 'Esturgeon & caviar d’exception' },
  { n: 'Racé', d: 'Produits paysans & pêches artisanales' },
]

export function Fournisseurs() {
  return (
    <section className="bg-[#F5F2EC] py-24 text-[#0D0C09] md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-[#C4A017]">← Nos producteurs</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-5 font-libre text-[2.5rem] font-bold italic leading-[1.1] text-[#0D0C09]">
            Le terroir bordelais
            <br />
            dans chaque assiette.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fournisseurs.map((f, i) => (
            <Reveal key={f.n} delay={i * 90}>
              <div className="flex h-full flex-col justify-between border border-[#C4A017]/25 bg-[#0D0C09] p-7">
                <span className="font-nunito text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C4A017]">
                  0{i + 1}
                </span>
                <div className="mt-10">
                  <h3 className="font-libre text-[18px] italic text-[#F5F2EC]">{f.n}</h3>
                  <p className="mt-2 font-nunito text-[13px] font-light leading-relaxed text-[#F5F2EC]/50">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
