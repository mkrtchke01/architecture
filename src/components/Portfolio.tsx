import { useMemo, useState } from 'react'
import { PROJECT_CATEGORIES, projects, type ProjectCategory } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

/** Блок портфолио с фильтрами по типу объекта. */
export function Portfolio() {
  const [active, setActive] = useState<ProjectCategory>('Все')

  const filtered = useMemo(
    () => (active === 'Все' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="portfolio" className="relative scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Портфолио"
          title="Реализованные проекты"
          description="Подборка объектов разного масштаба. Каждый проект — это задача, решение и материалы, подобранные под конкретную архитектуру."
        />

        {/* Фильтры */}
        <Reveal className="mt-12 flex flex-wrap gap-2.5" role="tablist" aria-label="Фильтр проектов">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = cat === active
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-brass bg-brass text-ink'
                    : 'border-line text-mist hover:border-brass/50 hover:text-bone'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </Reveal>

        {/* Сетка проектов */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 80}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <div className="relative h-72 overflow-hidden">
                {/* TODO: заменить на реальное фото проекта */}
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.type}`}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/70 px-3 py-1 text-xs font-medium text-bone backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-medium text-bone">{project.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-mist-dim">{project.type}</p>

                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="text-mist-dim">Задача</dt>
                    <dd className="mt-0.5 text-bone/90">{project.task}</dd>
                  </div>
                  <div>
                    <dt className="text-mist-dim">Решение</dt>
                    <dd className="mt-0.5 text-bone/90">{project.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-mist-dim">Материалы и технологии</dt>
                    <dd className="mt-0.5 text-mist">{project.materials}</dd>
                  </div>
                </dl>

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brass transition-colors hover:text-brass-soft"
                >
                  Обсудить похожий проект
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
