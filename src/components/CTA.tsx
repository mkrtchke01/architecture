import { site } from '../data/site'
import { Reveal } from './ui/Reveal'

/** Финальный CTA-блок перед формой. */
export function CTA() {
  return (
    <section id="cta" className="relative scroll-mt-24 overflow-hidden bg-ink-soft py-24 sm:py-32">
      {/* Световое пятно */}
      <div className="glow-spot absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-soft-pulse" />
      <div className="absolute inset-0 -z-10 bg-grid-lines bg-[size:80px_80px] opacity-20" />

      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">Давайте обсудим</span>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] text-bone sm:text-5xl lg:text-6xl">
            Обсудим архитектурное решение <br className="hidden sm:block" />
            для вашего объекта
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            Расскажите о задаче — мы предложим концепцию, материалы, конструктив и варианты
            реализации. Без обязательств.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Получить консультацию
            </a>
            <a href="#contact" className="btn-ghost">
              Отправить проект на расчёт
            </a>
            {/* TODO: проверить ссылки на мессенджеры в src/data/site.ts */}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="Связаться в WhatsApp"
            >
              WhatsApp / Telegram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
