import { CameraLogo } from './CameraLogo'

const columns = [
  {
    title: 'Продукт',
    links: [
      { label: 'Возможности', href: '#features' },
      { label: 'Как это работает', href: '#how-it-works' },
      { label: 'Тарифы', href: '#pricing' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#top' },
      { label: 'Контакты', href: 'mailto:hello@memoriee.app' },
      { label: 'Поддержка', href: 'mailto:support@memoriee.app' },
    ],
  },
  {
    title: 'Правовая информация',
    links: [
      { label: 'Условия использования', href: '#' },
      { label: 'Политика конфиденциальности', href: '#' },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#top" className="flex items-center gap-2 text-white mb-3">
              <span className="text-indigo-400">
                <CameraLogo size={26} />
              </span>
              <span className="text-lg font-bold tracking-tight">memoriee</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Ваши воспоминания живут вечно. Собираем фото с ваших событий в одном месте.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Memoriee. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
