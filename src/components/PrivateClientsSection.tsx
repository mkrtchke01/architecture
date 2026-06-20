import { Reveal } from './ui/Reveal'

const benefits = [
  {
    title: 'Превратим идею в готовое решение',
    text: 'Вы рассказываете, каким видите результат, — мы предлагаем форму, конструктив и сценарий света.',
  },
  {
    title: 'Подберём материал и свет под дом',
    text: 'Учитываем архитектуру, участок и образ жизни, чтобы решение выглядело уместно и дорого.',
  },
  {
    title: 'Сделаем объект выразительным вечером',
    text: 'Интегрированный свет раскрывает фасад, интерьер и сад в тёмное время — без лишней яркости.',
  },
  {
    title: 'Возьмём на себя весь процесс',
    text: 'Консультация, проект, производство и монтаж — вы получаете результат, а не набор задач.',
  },
]

/** Блок для частных клиентов — простым языком о пользе. */
export function PrivateClientsSection() {
  return (
    <section id="private" className="relative scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Визуальная часть слева */}
        <Reveal className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-2xl border border-line">
            {/* TODO: заменить на реальное фото интерьера/дома клиента */}
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
              alt="Премиальный интерьер с авторским декором и интегрированным освещением"
              className="h-[560px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
        </Reveal>

        {/* Текстовая часть */}
        <div>
          <Reveal>
            <span className="eyebrow">Частным клиентам</span>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-bone sm:text-5xl">
              Поможем разобраться и доведём проект до результата
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              Не нужно разбираться в материалах и инженерии — это наша работа. Вы получаете
              уникальное решение для дома, участка или интерьера и спокойствие на всех этапах.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 80} className="glass-card p-6">
                <h3 className="text-base font-semibold text-bone">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{b.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <a href="#contact" className="btn-ghost mt-10">
              Обсудить идею для дома
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
