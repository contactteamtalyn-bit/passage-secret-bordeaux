import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { LeSecret } from '@/components/sections/LeSecret'
import { LeChef } from '@/components/sections/LeChef'
import { LExperience } from '@/components/sections/LExperience'
import { LesPlats } from '@/components/sections/LesPlats'
import { Fournisseurs } from '@/components/sections/Fournisseurs'
import { Presse } from '@/components/sections/Presse'
import { Privatisation } from '@/components/sections/Privatisation'
import { Reservation } from '@/components/sections/Reservation'
import { Localisation } from '@/components/sections/Localisation'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <StatStrip />
        <LeSecret />
        <LeChef />
        <LExperience />
        <LesPlats />
        <Fournisseurs />
        <Presse />
        <Privatisation />
        <Reservation />
        <Localisation />
      </main>
      <Footer />
    </>
  )
}
