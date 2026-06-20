import { solutions } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

/** Блок «Решения / Направления» — карточки с изображением и описанием. */
export function Solutions() {
  return (
    <section id="solutions" className="relative scroll-mt-24 bg-ink-soft py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Решения"
          title="Направления, в которых мы сильнее всего"
          description="Шесть профильных решений. Каждое проектируется индивидуально и может объединяться в комплексный проект."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal
              key={solution.title}
              delay={(i % 3) * 80}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <div className="relative h-60 overflow-hidden">
                {/* TODO: заменить на реальное фото решения */}
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-lg font-semibold text-bone">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{solution.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brass transition-colors hover:text-brass-soft"
                >
                  Обсудить решение
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
