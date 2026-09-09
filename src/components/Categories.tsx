const categories = [
  { name: 'Свадьба', emoji: '💍' },
  { name: 'День рождения', emoji: '🎂' },
  { name: 'Путешествие', emoji: '✈️' },
  { name: 'Фестиваль', emoji: '🎪' },
  { name: 'Выпускной', emoji: '🎓' },
  { name: 'Встреча', emoji: '🥳' },
  { name: 'Корпоратив', emoji: '💼' },
  { name: 'Другое', emoji: '🎉' },
]

export const Categories = () => {
  return (
    <section className="py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Для любого события</h2>
          <p className="text-gray-400 mt-2">Выберите тип — Memoriee подстроится под формат</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col items-center gap-3"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">{cat.emoji}</div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
