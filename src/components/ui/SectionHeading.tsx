import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

/** Единый блок заголовка секции: метка + крупный display-заголовок + лид. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={`${isCenter ? 'mx-auto text-center' : ''} ${isCenter ? 'max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-bone sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
