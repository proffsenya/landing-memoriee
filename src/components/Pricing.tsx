import { Check } from 'lucide-react'
import { Button } from './Button'

interface Plan {
  name: string
  price: number
  description: string
  features: string[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: 'Свадебный',
    price: 6500,
    description: 'Базовый пакет для вашего главного дня',
    features: [
      'Одно мероприятие',
      'Безлимитное количество гостей',
      '200 фотографий максимум',
      '1 фильтр на выбор',
      'Скачивание фото',
      'Техническая поддержка',
    ],
  },
  {
    name: 'Праздничный',
    price: 9990,
    description: 'Идеален для свадьбы с дополнительным мероприятием',
    features: [
      'Два мероприятия',
      'Безлимитное количество гостей',
      'До 400 фотографий (по 200 на событие)',
      '2 фильтра на выбор',
      'Скачивание фото',
      'Приоритетная поддержка',
    ],
    highlighted: true,
  },
  {
    name: 'Премиум',
    price: 14990,
    description: 'Максимум возможностей для профессионального результата',
    features: [
      'Одно мероприятие',
      'Безлимитное количество гостей',
      '500 фотографий максимум',
      'Видео запись (поддержка)',
      '3 фильтра на выбор',
      'Приоритетная поддержка',
      'Архивирование данных',
    ],
  },
]

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold">Тарифы</h2>
          <p className="text-gray-400 mt-3">Выберите подходящий пакет — без скрытых платежей.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl overflow-hidden transition-all bg-gradient-to-br from-slate-800 to-slate-900 border ${
                plan.highlighted
                  ? 'border-indigo-500 md:scale-105 shadow-2xl shadow-indigo-500/10'
                  : 'border-slate-700 hover:border-indigo-500/40'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-2 text-xs font-semibold tracking-wide">
                  ПОПУЛЯРНЫЙ ВЫБОР
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price.toLocaleString('ru-RU')}</span>
                  <span className="text-gray-400 ml-2">₽</span>
                </div>

                <a href="#top">
                  <Button
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    className="w-full mb-8"
                  >
                    Выбрать тариф
                  </Button>
                </a>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={18} className="text-green-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          Дополнительные фото — 32 ₽ за штуку. Все тарифы включают фильтры и скачивание в полном качестве.
        </p>
      </div>
    </section>
  )
}
