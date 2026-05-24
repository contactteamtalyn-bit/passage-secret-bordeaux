import type { Metadata } from 'next'
import { Libre_Baskerville, Nunito } from 'next/font/google'
import './globals.css'
import { DemoModalProvider } from '@/components/DemoModal'
import { DemoBanner } from '@/components/DemoBanner'

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre',
  display: 'swap',
  adjustFontFallback: false,
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Passage Secret — Table gastronomique · Bordeaux · Guide Michelin 2025',
  description:
    'Passage Secret, table gastronomique nichée dans le Passage Sarget, Bordeaux. Cuisine française de Thomas Pasquereau, sélectionnée au Guide Michelin 2025. Dîner du mardi au samedi.',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${libre.variable} ${nunito.variable} font-nunito bg-[#0D0C09] text-[#F5F2EC] antialiased`}>
        <DemoModalProvider>
          <DemoBanner />
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}
