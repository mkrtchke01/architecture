import { services } from '../data/content'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

/** Блок «Что мы создаём» — категории услуг. */
export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Что мы создаём"
          title={
            <>
              Декор, свет и стекло <br className="hidden sm:block" />
              в одной инженерной логике
            </>
          }
          description="Девять направлений, которые соединяются в единое решение под ваш объект — от фасадного рельефа до светопрозрачных конструкций."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 80}
              className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-surface"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line text-brass transition-all duration-500 group-hover:border-brass/50 group-hover:bg-brass/10">
                <Icon name={service.icon} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-bone">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
              <span className="mt-6 inline-block h-px w-0 bg-brass transition-all duration-500 group-hover:w-12" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
