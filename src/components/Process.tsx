import { processSteps } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

/** Блок «Как мы работаем» — этапы от заявки до сдачи. */
export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid-lines bg-[size:80px_80px] opacity-25" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Как мы работаем"
          title="Путь от идеи до сданного объекта"
          description="Прозрачный процесс из восьми этапов. На каждом вы понимаете, что происходит, сколько это стоит и к какому результату ведёт."
        />

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.step}
              delay={(i % 4) * 70}
              className="group relative bg-ink-soft p-8 transition-colors duration-500 hover:bg-surface"
            >
              <span className="font-display text-5xl font-medium text-surface-2 transition-colors duration-500 group-hover:text-brass/80">
                {step.step}
              </span>
              <h3 className="mt-4 text-base font-semibold text-bone">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
