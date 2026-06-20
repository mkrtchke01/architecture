import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react'

type RevealProps = {
  children: ReactNode
  /** Задержка появления в мс — для каскадного эффекта в списках */
  delay?: number
  className?: string
  /** Тег-обёртка (div по умолчанию): 'li', 'dl' и т.п. */
  as?: ElementType
} & Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'children' | 'ref'>

/**
 * Обёртка для плавного появления контента при попадании в зону видимости.
 * Использует IntersectionObserver — без сторонних библиотек анимации.
 */
export function Reveal({ children, delay = 0, className = '', as, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = (as ?? 'div') as ElementType

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
