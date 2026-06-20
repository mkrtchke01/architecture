import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { Reveal } from './ui/Reveal'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const clientTypes = ['Архитектор', 'Дизайнер', 'Застройщик', 'Частный клиент', 'Другое']
const taskTypes = [
  'Архитектурный/интерьерный декор',
  'Ландшафтный декор и свет',
  'Стеклянный козырёк / навес',
  'Стеклянные перегородки',
  'Зенитный фонарь',
  'Нестандартная конструкция',
  'Пока не определился(ась)',
]
const contactMethods = ['Телефон', 'WhatsApp', 'Telegram', 'Email']

/** Блок формы заявки. Frontend-заглушка, готовая к подключению backend/API. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [fileName, setFileName] = useState<string>('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      // ───────────────────────────────────────────────────────────────
      // TODO: подключить реальную отправку заявки.
      // Вариант А — свой backend:
      //   await fetch('/api/lead', {
      //     method: 'POST',
      //     body: formData, // FormData умеет передавать файл
      //   })
      // Вариант Б — сторонний сервис (Formspree, Getform, и т.п.):
      //   await fetch('https://formspree.io/f/XXXX', { method: 'POST', body: formData })
      // ───────────────────────────────────────────────────────────────
      console.log('Заявка (заглушка):', payload)
      await new Promise((r) => setTimeout(r, 900)) // имитация запроса

      setStatus('success')
      e.currentTarget.reset()
      setFileName('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-[15px] text-bone placeholder:text-mist-dim transition-colors duration-200 focus:border-brass focus:outline-none'
  const labelClass = 'mb-2 block text-sm font-medium text-bone'

  return (
    <section id="contact" className="relative scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Контактная информация */}
        <div>
          <Reveal>
            <span className="eyebrow">Контакты</span>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-bone sm:text-5xl">
              Отправьте задачу — предложим решение
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
              Заполните форму или свяжитесь напрямую. Можно приложить эскиз, чертёж или
              визуализацию — так мы быстрее подготовим предложение.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10 space-y-5">
            {/* TODO: реальные контакты редактируются в src/data/site.ts */}
            <a href={site.phoneHref} className="flex items-center gap-4 text-bone hover:text-brass">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brass">
                ☏
              </span>
              <span>
                <span className="block text-xs text-mist-dim">Телефон</span>
                <span className="text-base">{site.phone}</span>
              </span>
            </a>
            <a href={site.emailHref} className="flex items-center gap-4 text-bone hover:text-brass">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brass">
                @
              </span>
              <span>
                <span className="block text-xs text-mist-dim">Email</span>
                <span className="text-base">{site.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 text-bone">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brass">
                ⌖
              </span>
              <span>
                <span className="block text-xs text-mist-dim">Город · режим работы</span>
                <span className="text-base">
                  {site.city} · {site.workingHours}
                </span>
              </span>
            </div>

            <div className="flex gap-3 pt-2">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-2.5 text-sm">
                WhatsApp
              </a>
              <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-2.5 text-sm">
                Telegram
              </a>
            </div>
          </Reveal>
        </div>

        {/* Форма */}
        <Reveal delay={80}>
          <form
            onSubmit={handleSubmit}
            className="glass-card !bg-surface/40 p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Имя <span className="text-brass">*</span>
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Как к вам обращаться" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Телефон <span className="text-brass">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+7 ___ ___-__-__" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="clientType" className={labelClass}>
                  Тип клиента
                </label>
                <select id="clientType" name="clientType" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Выберите вариант
                  </option>
                  {clientTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="taskType" className={labelClass}>
                  Тип задачи
                </label>
                <select id="taskType" name="taskType" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Что нужно реализовать
                  </option>
                  {taskTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="description" className={labelClass}>
                  Описание проекта
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Объект, задача, сроки, есть ли чертежи/визуализации…"
                  className={`${fieldClass} resize-y`}
                />
              </div>

              {/* Прикрепление файла */}
              <div className="sm:col-span-2">
                <span className={labelClass}>Чертёж / эскиз (необязательно)</span>
                <label
                  htmlFor="file"
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-dashed border-line bg-surface px-4 py-3.5 text-sm text-mist transition-colors hover:border-brass/50"
                >
                  <span className="truncate">{fileName || 'PDF, JPG, PNG, DWG — до 10 МБ'}</span>
                  <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-bone">
                    Прикрепить
                  </span>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf"
                    className="sr-only"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                  />
                </label>
              </div>

              <div className="sm:col-span-2">
                <span className={labelClass}>Предпочтительный способ связи</span>
                <div className="flex flex-wrap gap-2">
                  {contactMethods.map((m, idx) => (
                    <label
                      key={m}
                      className="cursor-pointer rounded-full border border-line px-4 py-2 text-sm text-mist transition-colors has-[:checked]:border-brass has-[:checked]:bg-brass/10 has-[:checked]:text-brass"
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={m}
                        defaultChecked={idx === 0}
                        className="sr-only"
                      />
                      {m}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Согласие */}
            <label className="mt-6 flex items-start gap-3 text-sm text-mist">
              <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-brass" />
              <span>
                Соглашаюсь на обработку персональных данных и{' '}
                {/* TODO: ссылка на реальную политику конфиденциальности */}
                <a href="#" className="text-brass underline-offset-2 hover:underline">
                  политику конфиденциальности
                </a>
                .
              </span>
            </label>

            <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-6 w-full disabled:opacity-60">
              {status === 'submitting' ? 'Отправляем…' : 'Отправить заявку'}
            </button>

            {/* Статусы — доступно для скринридеров */}
            <div aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm">
              {status === 'success' && (
                <p className="text-brass">Спасибо! Заявка отправлена — мы свяжемся с вами в ближайшее время.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400">
                  Не удалось отправить. Напишите нам напрямую: {site.phone}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
