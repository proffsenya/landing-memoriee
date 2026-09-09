import { Camera, QrCode, Sparkles } from 'lucide-react'
import { Button } from './Button'

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl top-10 -left-40" />
        <div className="absolute w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl top-40 -right-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30">
            <Sparkles size={16} className="text-indigo-300" />
            <span className="text-sm text-gray-200">Все фото с вашего события — в одном месте</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Ваши воспоминания
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              живут вечно
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Создайте событие, поделитесь QR-кодом с гостями — и получите все фотографии со свадьбы,
            дня рождения или вечеринки в одной галерее. Без установки приложений.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="#pricing">
              <Button className="inline-flex items-center gap-2 px-8 py-4 text-lg">
                <Camera size={20} />
                Создать мероприятие
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="secondary" className="inline-flex items-center gap-2 px-8 py-4 text-lg">
                <QrCode size={20} />
                Как это работает
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-400">Бесплатно до 10 гостей · без карты</p>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-center animate-slide-up">
          {[
            ['500+', 'фото на тариф'],
            ['10', 'гостей бесплатно'],
            ['3', 'AI-фильтра'],
            ['24/7', 'доступ к галерее'],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-bold text-white">{value}</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
