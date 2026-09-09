import { Camera } from 'lucide-react'
import { Button } from './Button'

export const CtaBanner = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 sm:px-12 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute w-72 h-72 bg-white rounded-full blur-3xl -top-20 -left-20" />
            <div className="absolute w-72 h-72 bg-white rounded-full blur-3xl -bottom-20 -right-20" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Соберите все фото с вашего события уже сегодня
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Создание события занимает меньше двух минут. Первые 10 гостей — бесплатно.
            </p>
            <a href="#pricing">
              <Button
                variant="secondary"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 border-0 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <Camera size={20} />
                Создать мероприятие
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
