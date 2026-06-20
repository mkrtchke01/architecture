import { Reveal } from './ui/Reveal'

const points = [
  'Работаем по ТЗ, чертежам и визуализациям',
  'Помогаем адаптировать идею под производство',
  'Готовим технические решения и узлы',
  'Соблюдаем архитектурную концепцию',
  'Берём на себя производство и монтаж',
  'Подключаемся на стадии проектирования',
  'Работаем с нестандартными формами и материалами',
]

/** Блок для B2B: архитекторы, дизайнеры, застройщики. */
export function B2BSection() {
  return (
    <section id="b2b" className="relative scroll-mt-24 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid-lines bg-[size:80px_80px] opacity-30" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Текстовая часть */}
        <div>
          <Reveal>
            <span className="eyebrow">Для архитекторов и бюро</span>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-bone sm:text-5xl">
              Надёжный производственный партнёр для вашего проекта
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              Мы говорим с вами на одном языке — чертежей, узлов и допусков. Берём идею и доводим её
              до реализованной конструкции, сохраняя замысел и детали.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-px overflow-hidden rounded-xl border border-line bg-line">
            {points.map((point, i) => (
              <Reveal
                as="li"
                key={point}
                delay={i * 50}
                className="flex items-center gap-4 bg-ink-soft px-5 py-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brass/40 text-xs font-semibold text-brass">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] text-bone">{point}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <a href="#contact" className="btn-primary mt-10">
              Обсудить проект как партнёр
            </a>
          </Reveal>
        </div>

        {/* Визуальная часть */}
        <Reveal delay={100} className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-line">
            {/* TODO: заменить на реальное фото — чертёж/производство/монтаж */}
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="Архитектурное проектирование и подготовка к производству конструкций"
              className="h-[560px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          </div>
          {/* Плавающая подпись */}
          <div className="glass-card absolute -bottom-6 left-6 right-6 p-5 sm:left-10 sm:right-auto sm:max-w-xs">
            <p className="text-sm leading-relaxed text-bone">
              «Подключаемся на любой стадии — от концепции до авторского надзора на монтаже».
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
