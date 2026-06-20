import { partnerLogos } from '../data/content'
import { stats, site } from '../data/site'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

// Места под отзывы. TODO: заменить на реальные отзывы клиентов и партнёров.
const testimonials = [
  {
    quote:
      'Взяли наш сложный фасадный узел и довели до реализации без потери замысла. Свет вечером работает именно так, как мы задумывали.',
    author: 'Архитектор', // TODO: имя, бюро
    role: 'Архитектурное бюро', // TODO
  },
  {
    quote:
      'Стеклянные перегородки и козырёк сделаны идеально по геометрии. Монтаж — аккуратный, сроки соблюдены.',
    author: 'Частный клиент', // TODO: имя
    role: 'Загородный дом', // TODO
  },
  {
    quote:
      'Подключились на стадии проектирования и сняли с нас всю инженерию по светопрозрачным конструкциям.',
    author: 'Руководитель проекта', // TODO: имя
    role: 'Девелопер', // TODO
  },
]

const trustMarkers = [
  'Работа под ключ',
  `Гарантия ${stats[3].value.replace(' лет', '')} лет`,
  'Техническая документация',
  'Собственный монтаж',
]

/** Блок доверия: метрики, маркеры, отзывы, логотипы партнёров. */
export function Trust() {
  return (
    <section id="trust" className="relative scroll-mt-24 bg-ink-soft py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Доверие"
          title="Опыт, который можно проверить"
          description={`Более ${site.foundedYear ? new Date().getFullYear() - site.foundedYear : 10} лет работаем с архитекторами, дизайнерами и частными заказчиками. Отвечаем за результат документально.`}
        />

        {/* Маркеры доверия */}
        <Reveal className="mt-12 flex flex-wrap gap-3">
          {trustMarkers.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-bone"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              {m}
            </span>
          ))}
        </Reveal>

        {/* Отзывы */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author + i} delay={(i % 3) * 80} className="glass-card flex flex-col p-7">
              <span className="font-display text-5xl leading-none text-brass/40" aria-hidden>
                “
              </span>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-bone/90">{t.quote}</p>
              <footer className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold text-bone">{t.author}</p>
                <p className="text-xs text-mist">{t.role}</p>
              </footer>
            </Reveal>
          ))}
        </div>

        {/* Логотипы партнёров / клиентов */}
        <Reveal className="mt-16">
          <p className="text-center text-xs uppercase tracking-widest2 text-mist-dim">
            Нам доверяют бюро, студии и девелоперы
          </p>
          {/* TODO: заменить текстовые заглушки на реальные логотипы партнёров */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partnerLogos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-semibold uppercase tracking-widest text-mist-dim transition-colors duration-300 hover:text-mist"
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
