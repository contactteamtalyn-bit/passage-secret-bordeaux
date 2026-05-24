import { Reveal } from '@/components/ui/Reveal'

const presse = ['Sud Ouest', 'L’Hôtellerie Restauration', 'Petit Futé', 'Courrier de Gironde']

export function Presse() {
  return (
    <section className="relative overflow-hidden bg-[#0D0C09] py-24 md:py-28">
      <div className="candlelight pointer-events-none absolute inset-0" aria-hidden />
      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow text-[#C4A017]">← Ils en parlent</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-5 font-libre text-[3rem] font-bold italic leading-[1.1] text-[#F5F2EC]">
            Un secret qui
            <br />
            <em className="text-[#C4A017]">s&apos;ébruite.</em>
          </h2>
        </Reveal>

        {/* Citation Michelin */}
        <Reveal delay={180}>
          <figure className="relative mx-auto mt-14 max-w-3xl text-center">
            <span className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 font-libre text-[10rem] leading-none text-[#C4A017]/20">“</span>
            <blockquote className="relative font-nunito text-[18px] font-light italic leading-[1.8] text-[#F5F2EC]/80">
              Caché dans un élégant passage couvert du 19e s., ce restaurant porte bien son nom. Aux commandes,
              le discret Thomas Pasquereau propose une cuisine d&apos;inspiration classique à l&apos;exécution
              remarquable.
            </blockquote>
            <figcaption className="mt-6 font-nunito text-[12px] font-bold uppercase tracking-[0.18em] text-[#C4A017]">
              — Le Guide Michelin France 2025
            </figcaption>
          </figure>
        </Reveal>

        {/* Presse */}
        <Reveal delay={260}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[#C4A017]/15 pt-10">
            {presse.map((p) => (
              <span key={p} className="font-libre text-[15px] italic text-[#F5F2EC]/40 transition-colors duration-300 hover:text-[#F5F2EC]/80">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
