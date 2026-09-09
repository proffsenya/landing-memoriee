import { QrCode, Wand2, FolderDown, Users, ShieldCheck, Zap } from 'lucide-react'

const features = [
  {
    icon: QrCode,
    title: 'QR-код для гостей',
    description: 'Гости сканируют код и сразу загружают фото — без регистрации и установки приложений.',
  },
  {
    icon: Wand2,
    title: 'Фирменные фильтры',
    description: 'Применяйте стильные фильтры ко всем фото события в один клик, сохраняя единый стиль.',
  },
  {
    icon: FolderDown,
    title: 'Скачивание в один клик',
    description: 'Вся галерея архивируется и доступна для скачивания в полном качестве.',
  },
  {
    icon: Users,
    title: 'Безлимит гостей',
    description: 'Любое количество приглашённых может присоединиться и загружать снимки одновременно.',
  },
  {
    icon: ShieldCheck,
    title: 'Приватность события',
    description: 'Доступ к галерее есть только у тех, кому вы передали ссылку или QR-код.',
  },
  {
    icon: Zap,
    title: 'Мгновенная загрузка',
    description: 'Фото появляются в общей ленте в реальном времени, пока идёт праздник.',
  },
]

export const Features = () => {
  return (
    <section id="features" className="py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold">Всё, что нужно для сбора фото</h2>
          <p className="text-gray-400 mt-3">
            Memoriee берёт на себя техническую часть, пока вы наслаждаетесь праздником.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center mb-4">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
