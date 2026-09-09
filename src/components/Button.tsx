import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'light'
  children: ReactNode
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const base = 'px-6 py-3 rounded-xl font-semibold transition-all duration-200'
  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700',
    light: 'bg-white text-indigo-700 hover:bg-gray-100 shadow-lg',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
