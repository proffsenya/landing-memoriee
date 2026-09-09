import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Нужно ли гостям устанавливать приложение?',
    answer:
      'Нет. Гости сканируют QR-код камерой телефона, открывают страницу в браузере и сразу могут загружать фото.',
  },
  {
    question: 'Что если гостей больше, чем в бесплатном тарифе?',
    answer:
      'Просто выберите один из платных пакетов — количество гостей в них не ограничено, лимит только на число фотографий.',
  },
  {
    question: 'Можно ли скачать все фото после события?',
    answer:
      'Да, вся галерея архивируется, и вы можете скачать фотографии в исходном качестве в любой момент.',
  },
  {
    question: 'Как долго хранятся фотографии?',
    answer:
      'Фото хранятся в вашем личном кабинете бессрочно, пока вы не удалите событие самостоятельно.',
  },
  {
    question: 'Можно ли изменить тариф после создания события?',
    answer: 'Да, вы можете докупить дополнительные фотографии или перейти на другой пакет в любой момент.',
  },
]

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold">Частые вопросы</h2>
          <p className="text-gray-400 mt-3">Не нашли ответ? Напишите нам — поможем разобраться.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
