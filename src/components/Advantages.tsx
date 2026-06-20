import { advantages } from '../data/content'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

/** Блок преимуществ. */
export function Advantages() {
  return (
    <section id="advantages" className="relative scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Преимущества"
          title="Почему результат выглядит дорого и работает надёжно"
          description="Мы соединяем три компетенции, которые обычно разнесены по разным подрядчикам: дизайн, инженерию и свет."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={(i % 4) * 70} className="glass-card group p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-brass transition-all duration-500 group-hover:border-brass/50 group-hover:bg-brass/10">
                <Icon name={adv.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-bone">{adv.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist">{adv.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
