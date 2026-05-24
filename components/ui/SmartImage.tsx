'use client'

import { useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
  /** Texte du placeholder si l'image manque (ex: "Plat à venir") */
  fallbackLabel?: string
}

/** <img> avec fallback élégant "Photo à venir" (sombre + or). Jamais d'Unsplash.
 *  `className` est appliqué à l'img ET au fallback — dimensionner depuis l'appelant. */
export function SmartImage({ src, alt, className, style, fallbackLabel = 'Photo à venir' }: SmartImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={cn('flex flex-col items-center justify-center gap-1.5 border border-[#C4A017]/25 bg-[#1A1710]', className)}
        style={style}
        aria-label={alt}
      >
        <span className="font-libre text-[15px] italic text-[#C4A017]/80">{fallbackLabel}</span>
        <span className="font-nunito text-[9px] uppercase tracking-[0.15em] text-[#F5F2EC]/30">{src.split('/').pop()}</span>
      </div>
    )
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} onError={() => setError(true)} className={className} style={style} />
}
