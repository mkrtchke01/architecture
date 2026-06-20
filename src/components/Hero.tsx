import { site, stats } from '../data/site'

/** Первый экран: сильный заголовок, подзаголовок, два CTA и доверительный маркер. */
export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-ink pt-20">
      {/* Фоновое изображение — премиальный экстерьер с вечерней подсветкой.
          TODO: заменить на реальное hero-фото проекта */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Премиальный дом с архитектурной вечерней подсветкой и светопрозрачными конструкциями"
          className="h-full w-full object-cover opacity-50"
          loading="eager"
          fetchpriority="high"
        />
        {/* Затемнение для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        {/* Архитектурная сетка */}
        <div className="absolute inset-0 bg-grid-lines bg-[size:64px_64px] opacity-40" />
        {/* Световое пятно (акцент на «свет») */}
        <div className="glow-spot absolute -right-40 top-20 h-[520px] w-[520px] animate-soft-pulse" />
      </div>

      <div className="container-x flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20">
        <div className="max-w-4xl">
          <span className="eyebrow animate-fade-up">Архитектура · Свет · Стекло</span>

          <h1
            className="mt-7 font-display text-5xl font-medium leading-[1.02] text-bone opacity-0 animate-fade-up sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
            style={{ animationDelay: '0.1s' }}
          >
            Архитектурный декор <br className="hidden sm:block" />
            и <span className="text-gradient-brass">свет</span>, рождённые из формы объекта
          </h1>

          <p
            className="mt-7 max-w-2xl text-lg leading-relaxed text-mist opacity-0 animate-fade-up sm:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            Создаём индивидуальные архитектурные, интерьерные и ландшафтные декоративные решения
            с интегрированным освещением, а также светопрозрачные конструкции: козырьки,
            перегородки и зенитные фонари — под ключ.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row sm:items-center"
            style={{ animationDelay: '0.3s' }}
          >
            <a href="#contact" className="btn-primary">
              Получить консультацию
            </a>
            <a href="#portfolio" className="btn-ghost">
              Смотреть проекты
            </a>
          </div>

          {/* Доверительный маркер */}
          <p
            className="mt-10 flex items-center gap-3 text-sm text-mist-dim opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            Проектируем, производим и монтируем индивидуальные решения под архитектуру объекта.
          </p>
        </div>

        {/* Метрики доверия */}
        <dl
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line opacity-0 animate-fade-up lg:grid-cols-4"
          style={{ animationDelay: '0.5s' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink/70 px-6 py-7 backdrop-blur-sm">
              <dt className="font-display text-4xl font-medium text-brass sm:text-5xl">{s.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-mist">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Контактная панель (телефон/мессенджеры) для быстрого действия */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only"
        aria-hidden="false"
      >
        Написать в WhatsApp
      </a>
    </section>
  )
}
