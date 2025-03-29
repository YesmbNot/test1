// app/components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Menu, X, User } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Здесь будет логика для проверки аутентификации
  const isAuthenticated = false

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">MemCoin</Link>
          </div>
          
          {/* Поиск - только на десктопе */}
          <div className="hidden md:flex items-center flex-1 mx-6">
            <div className="relative w-full max-w-xl">
              <input 
                type="text" 
                placeholder="Поиск мемкоинов..." 
                className="w-full py-2 px-4 pl-10 rounded-lg bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute left-3 top-2.5 text-blue-300" size={18} />
            </div>
          </div>
          
          {/* Навигация - только на десктопе */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/memcoins" className="px-3 py-2 hover:bg-blue-700 rounded-md">Мемкоины</Link>
            <Link href="/add-memcoin" className="px-3 py-2 hover:bg-blue-700 rounded-md">Добавить</Link>
            {isAuthenticated ? (
              <Link href="/profile" className="flex items-center px-3 py-2 hover:bg-blue-700 rounded-md">
                <User size={18} className="mr-2" />
                Профиль
              </Link>
            ) : (
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">
                Войти
              </button>
            )}
          </nav>
          
          {/* Кнопка мобильного меню */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-blue-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2 pb-4">
            <div className="relative w-full mb-3">
              <input 
                type="text" 
                placeholder="Поиск мемкоинов..." 
                className="w-full py-2 px-4 pl-10 rounded-lg bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute left-3 top-2.5 text-blue-300" size={18} />
            </div>
            <div className="flex flex-col space-y-2">
              <Link 
                href="/memcoins" 
                className="px-3 py-2 hover:bg-blue-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Мемкоины
              </Link>
              <Link 
                href="/add-memcoin" 
                className="px-3 py-2 hover:bg-blue-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Добавить
              </Link>
              {isAuthenticated ? (
                <Link 
                  href="/profile" 
                  className="flex items-center px-3 py-2 hover:bg-blue-700 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={18} className="mr-2" />
                  Профиль
                </Link>
              ) : (
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">
                  Войти
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}