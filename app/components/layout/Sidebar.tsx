// app/components/layout/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, CreditCard, Flame, BarChart2, TrendingUp, Filter, PlusCircle } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Главная', href: '/', icon: Home },
    { name: 'Все мемкоины', href: '/memcoins', icon: BarChart2 },
    { name: 'Популярные', href: '/trending', icon: TrendingUp },
    { name: 'Новые', href: '/new', icon: Flame },
    { name: 'Добавить мемкоин', href: '/add-memcoin', icon: PlusCircle },
    { name: 'Купить буст', href: '/boost', icon: CreditCard },
  ]
  
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 bg-white">
      <div className="p-4">
        <div className="rounded-lg bg-gray-100 p-3">
          <div className="flex items-center mb-2">
            <Filter size={16} className="text-gray-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Быстрые фильтры</span>
          </div>
          <div className="space-y-2">
            <button className="w-full px-3 py-1.5 bg-blue-50 text-blue-600 text-sm rounded hover:bg-blue-100 text-left">
              24ч: Наибольший рост
            </button>
            <button className="w-full px-3 py-1.5 bg-white border border-gray-200 text-sm rounded hover:bg-gray-50 text-left">
              Новые листинги
            </button>
            <button className="w-full px-3 py-1.5 bg-white border border-gray-200 text-sm rounded hover:bg-gray-50 text-left">
              Бусты активны
            </button>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-500' : 'text-gray-500'}`} />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="bg-blue-50 p-3 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 mb-1">Хотите буст?</h3>
          <p className="text-xs text-blue-600 mb-2">
            Продвиньте свой мемкоин в топ списка
          </p>
          <Link
            href="/boost"
            className="w-full flex items-center justify-center px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Купить буст
          </Link>
        </div>
      </div>
    </aside>
  )
}