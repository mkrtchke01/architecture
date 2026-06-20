import { useEffect, useState } from 'react'
import { site } from '../data/site'

/** Плавающая кнопка быстрой связи (мессенджер). Появляется после прокрутки. */
export function FloatingContact() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={site.whatsapp} // TODO: ссылка мессенджера в src/data/site.ts
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в мессенджер"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brass text-ink shadow-glow transition-all duration-500 hover:bg-brass-soft ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.6.7.7-2.5-.2-.3A8 8 0 0 1 12 4zm-3 4.6c-.2 0-.5.1-.6.3-.3.3-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.6 4 3.5 1.9.7 2.3.6 2.7.5.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.6-.3c-.3-.2-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.1-1.5-.2-.3 0-.4.1-.5l.4-.5.2-.4v-.4c0-.1-.5-1.3-.7-1.7-.1-.4-.3-.3-.4-.3h-.4z" />
      </svg>
    </a>
  )
}
