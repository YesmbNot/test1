// app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'MemCoin Platform',
  description: 'Платформа для отслеживания и добавления мемкоинов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-4 md:p-6">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}