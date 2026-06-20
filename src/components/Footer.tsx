import { site } from '../data/site'

/** Подвал сайта. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Бренд */}
          <div>
            <p className="font-display text-2xl font-semibold text-bone">{site.brand}</p>
            <p className="mt-1 text-xs uppercase tracking-widest2 text-mist-dim">
              {site.brandTagline}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              Индивидуальные архитектурные, интерьерные и ландшафтные декоративные решения
              с интегрированным освещением и светопрозрачные конструкции под ключ.
            </p>
          </div>

          {/* Навигация */}
          <nav aria-label="Навигация в подвале">
            <p className="text-sm font-semibold text-bone">Разделы</p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-muted text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакты */}
          <div>
            <p className="text-sm font-semibold text-bone">Контакты</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {/* TODO: данные редактируются в src/data/site.ts */}
              <li>
                <a href={site.phoneHref} className="link-muted">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="link-muted">
                  {site.email}
                </a>
              </li>
              <li className="text-mist">
                {site.city}, {site.address}
              </li>
              <li className="flex gap-4 pt-2">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="link-muted">
                  WhatsApp
                </a>
                <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="link-muted">
                  Telegram
                </a>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-muted">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-xs text-mist-dim sm:flex-row sm:items-center sm:justify-between">
          {/* TODO: реальные реквизиты / юр. наименование */}
          <p>
            © {year} {site.legalName}. Все права защищены.
          </p>
          <div className="flex gap-6">
            {/* TODO: ссылки на реальные документы */}
            <a href="#" className="hover:text-mist">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-mist">
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
