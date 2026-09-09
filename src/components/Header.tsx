import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CameraLogo } from './CameraLogo'
import { Button } from './Button'

const links = [
  { href: '#features', label: 'Возможности' },
  { href: '#how-it-works', label: 'Как это работает' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#faq', label: 'Вопросы' },
]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="text-indigo-400">
            <CameraLogo size={28} />
          </span>
          <span className="text-lg font-bold tracking-tight">memoriee</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#pricing">
            <Button className="px-5 py-2.5 text-sm">Начать бесплатно</Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 px-4 pb-6 pt-2 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="block pt-2">
            <Button className="w-full">Начать бесплатно</Button>
          </a>
        </div>
      )}
    </header>
  )
}
