import { useState } from 'react'
import { faqs } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

/** Блок FAQ — раскрывающиеся вопросы (доступный аккордеон). */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Вопросы и ответы"
            title="Коротко о главном"
            description="Если не нашли ответ — напишите нам, ответим в течение рабочего дня."
          />
          <Reveal delay={120}>
            <a href="#contact" className="btn-ghost mt-8">
              Задать свой вопрос
            </a>
          </Reveal>
        </div>

        <Reveal as="dl" className="divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-bone sm:text-lg">{faq.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-brass transition-all duration-300 ${
                        isOpen ? 'rotate-45 border-brass/50 bg-brass/10' : ''
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
                  }`}
                >
                  <p className="min-h-0 max-w-2xl text-[15px] leading-relaxed text-mist">{faq.a}</p>
                </dd>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
