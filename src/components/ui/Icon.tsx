import type { IconName } from '../../data/content'

type IconProps = {
  name: IconName
  className?: string
}

/**
 * Лёгкий набор линейных иконок (inline SVG), без сторонних библиотек.
 * stroke="currentColor" — цвет наследуется от родителя.
 */
export function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (name) {
    case 'facade':
      return (
        <svg {...common}>
          <path d="M4 21V6l8-3 8 3v15" />
          <path d="M9 21v-5h6v5M9 11h.01M15 11h.01M12 8h.01" />
        </svg>
      )
    case 'interior':
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V8l7-4 7 4v13" />
          <path d="M10 21v-6h4v6M12 4v4" />
        </svg>
      )
    case 'landscape':
      return (
        <svg {...common}>
          <path d="M3 20h18M6 20c0-5 2-8 6-8s6 3 6 8" />
          <path d="M12 12V4M9 7l3-3 3 3" />
        </svg>
      )
    case 'panel':
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M8 3v18M12 3v18M16 3v18" />
        </svg>
      )
    case 'canopy':
      return (
        <svg {...common}>
          <path d="M3 9l9-4 9 4M5 9v2M19 9v2M3 11h18" />
          <path d="M8 11v8M16 11v8" />
        </svg>
      )
    case 'partition':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="7" height="16" rx="0.5" />
          <rect x="14" y="4" width="7" height="16" rx="0.5" />
          <path d="M12 3v18" />
        </svg>
      )
    case 'skylight':
      return (
        <svg {...common}>
          <path d="M4 14l8-8 8 8" />
          <path d="M4 14v6h16v-6M12 6v14M8 10v10M16 10v10" />
        </svg>
      )
    case 'glass':
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M8 6l8 12M16 6L8 18" opacity="0.5" />
        </svg>
      )
    case 'custom':
      return (
        <svg {...common}>
          <path d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5z" />
        </svg>
      )
    case 'light':
      return (
        <svg {...common}>
          <path d="M9 18h6M10 21h4" />
          <path d="M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z" />
        </svg>
      )
    case 'engineering':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
        </svg>
      )
    case 'material':
      return (
        <svg {...common}>
          <path d="M12 2l9 5-9 5-9-5 9-5z" />
          <path d="M3 12l9 5 9-5M3 17l9 5 9-5" opacity="0.6" />
        </svg>
      )
    case 'team':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
          <path d="M16 7a3 3 0 0 1 0 6M17 15c2 .5 4 2 4 5" opacity="0.7" />
        </svg>
      )
    case 'install':
      return (
        <svg {...common}>
          <path d="M14 4l6 6-9 9-6 1 1-6 8-8z" />
          <path d="M13 5l6 6" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'shape':
      return (
        <svg {...common}>
          <path d="M12 2l9 16H3L12 2z" />
          <circle cx="12" cy="13" r="2.5" opacity="0.6" />
        </svg>
      )
    default:
      return null
  }
}
