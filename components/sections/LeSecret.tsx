import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'

export function LeSecret() {
  return (
    <section id="restaurant" className="relative overflow-hidden bg-[#0D0C09] py-24 md:py-28">
      <div className="candlelight pointer-events-none absolute inset-0" aria-hidden />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
        {/* Texte */}
        <div>
          <Reveal>
            <p className="eyebrow text-[#C4A017]">← Le lieu</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-libre font-bold italic leading-[1.12] text-[#F5F2EC]" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
              Poussez la grille.
              <br />
              <em className="text-[#C4A017]">Découvrez le secret.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 font-nunito text-[17px] font-light leading-[1.8] text-[#F5F2EC]/65">
              Il faut oser. À la nuit tombée, le Passage Sarget est plongé dans le noir. Une lourde grille. Des
              douces lumières derrière. Des tables espacées sur tapis rouge. Le Passage Secret porte bien son nom.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-5 font-nunito text-[15px] font-light leading-[1.8] text-[#F5F2EC]/55">
              Le jour, c&apos;est une galerie. Le soir, c&apos;est votre table. On monte à l&apos;étage par la
              vitrine de la boutique Caviar de Neuvic — une salle sobre, élégante. Tables en bois artisanal, sans
              nappes. Un décor qui laisse toute la place à l&apos;essentiel : votre assiette.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <span className="mt-8 inline-block border border-[#C4A017]/40 px-4 py-2 font-nunito text-[10px] uppercase tracking-[0.2em] text-[#C4A017]">
              Passage Sarget · XIXe siècle · Bordeaux
            </span>
          </Reveal>
        </div>

        {/* Photos — offset asymétrique (desktop) */}
        <div className="relative hidden h-[600px] lg:block">
          <Reveal className="absolute right-0 top-0 z-10 w-[65%]" delay={120}>
            <div className="relative overflow-hidden border border-[#C4A017]/30">
              <SmartImage src="/images/terrasse/terrasse-01.jpg" alt="La grille du Passage Sarget" className="h-[420px] w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0C09]/30" />
            </div>
          </Reveal>

          <Reveal className="absolute bottom-0 left-0 z-20 w-[45%]" delay={300}>
            <div className="-rotate-2 overflow-hidden border border-[#C4A017]/40 shadow-2xl shadow-black/60">
              <SmartImage src="/images/terrasse/terrasse-02.jpg" alt="Les tables du Passage Secret" className="h-[280px] w-full object-cover" />
            </div>
          </Reveal>

          {/* Pastille flottante */}
          <Reveal className="absolute left-[40%] top-[46%] z-30" delay={460}>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C4A017] shadow-xl">
              <span className="font-libre text-[13px] italic text-[#0D0C09]">XIXe&nbsp;S.</span>
            </div>
          </Reveal>
        </div>

        {/* Photos — mobile */}
        <div className="flex flex-col gap-4 lg:hidden">
          <div className="overflow-hidden border border-[#C4A017]/30">
            <SmartImage src="/images/terrasse/terrasse-01.jpg" alt="La grille du Passage Sarget" className="h-60 w-full object-cover" />
          </div>
          <div className="-rotate-1 self-start overflow-hidden border border-[#C4A017]/40 shadow-xl">
            <SmartImage src="/images/terrasse/terrasse-02.jpg" alt="Les tables du Passage Secret" className="h-48 w-[80%] object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
