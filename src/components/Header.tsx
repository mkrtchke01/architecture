import { useEffect, useState } from 'react'
import { site } from '../data/site'

/** Фиксированный хедер с якорной навигацией и мобильным меню. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Блокируем прокрутку body при открытом мобильном меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        {/* Логотип. TODO: заменить на реальный логотип (SVG) */}
        <a
          href="#hero"
          className="group flex shrink-0 flex-col leading-none"
          aria-label={`${site.brand} — на главную`}
        >
          <span className="font-display text-2xl font-semibold tracking-wide text-bone">
            {site.brand}
          </span>
          <span className="mt-1 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-mist-dim">
            {site.brandTagline}
          </span>
        </a>

        {/* Десктоп-навигация */}
        <nav
          className="hidden items-center gap-7 xl:flex 2xl:gap-9"
          aria-label="Основная навигация"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-mist transition-colors hover:text-bone"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          <a
            href={site.phoneHref}
            className="whitespace-nowrap text-sm font-medium text-bone transition-colors hover:text-brass"
          >
            {site.phone}
          </a>
          <a href="#contact" className="btn-primary whitespace-nowrap text-sm">
            Получить консультацию
          </a>
        </div>

        {/* Бургер для мобильных и средних экранов */}
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-bone xl:hidden"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                open ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-px w-5 bg-current transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                open ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md transition-[max-height] duration-500 xl:hidden ${
          open ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Мобильная навигация">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-mist transition-colors hover:bg-surface hover:text-bone"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
            Получить консультацию
          </a>
        </nav>
      </div>
    </header>
  )
}
