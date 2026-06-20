/**
 * Глобальные данные компании и контакты.
 * TODO: заменить ВСЕ значения ниже на реальные данные клиента перед публикацией.
 */
export const site = {
  brand: 'LUMÉRA', // TODO: реальное название бренда
  brandTagline: 'Архитектурный свет · стекло · декор',
  legalName: 'ООО «Люмера»', // TODO: реальное юр. наименование
  foundedYear: 2014, // TODO: реальный год основания

  phone: '+7 (000) 000-00-00', // TODO
  phoneHref: 'tel:+70000000000', // TODO (только цифры, без пробелов)
  email: 'hello@example.com', // TODO
  emailHref: 'mailto:hello@example.com', // TODO

  city: 'Москва', // TODO
  address: 'ул. Примерная, 1', // TODO
  workingHours: 'Пн–Пт 10:00–19:00', // TODO

  // Мессенджеры — TODO: вставить реальные ссылки
  whatsapp: 'https://wa.me/70000000000',
  telegram: 'https://t.me/your_channel',
  instagram: 'https://instagram.com/your_profile',

  // Якорная навигация
  nav: [
    { label: 'Услуги', href: '#services' },
    { label: 'Решения', href: '#solutions' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Этапы', href: '#process' },
    { label: 'Для архитекторов', href: '#b2b' },
    { label: 'Контакты', href: '#contact' },
  ],
} as const

// Ключевые метрики доверия. TODO: подставить реальные цифры.
export const stats = [
  { value: '10+', label: 'лет в архитектурном свете и стекле' },
  { value: '320', label: 'реализованных объектов' },
  { value: '60+', label: 'проектов с архитекторами и бюро' },
  { value: '5 лет', label: 'гарантия на конструкции и монтаж' },
] as const
