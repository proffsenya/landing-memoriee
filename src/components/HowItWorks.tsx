const steps = [
  {
    number: '01',
    title: 'Создайте событие',
    description: 'Укажите название, дату и тип события — свадьба, день рождения или что угодно ещё.',
  },
  {
    number: '02',
    title: 'Поделитесь QR-кодом',
    description: 'Распечатайте табличку с кодом или отправьте ссылку гостям в чат.',
  },
  {
    number: '03',
    title: 'Гости загружают фото',
    description: 'Каждый снимок сразу попадает в общую галерею события в реальном времени.',
  },
  {
    number: '04',
    title: 'Скачайте всё сразу',
    description: 'После праздника заберите архив со всеми фотографиями в исходном качестве.',
  },
]

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold">Как это работает</h2>
          <p className="text-gray-400 mt-3">Четыре шага от идеи до готовой галереи воспоминаний.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
