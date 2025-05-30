'use client'

import Link from 'next/link'
import { FaHome, FaInfoCircle, FaMedal, FaAward, FaVoteYea, FaNewspaper, FaSearch } from 'react-icons/fa'

type MobileMenuProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const MobileMenu = ({
  isMenuOpen,
  toggleMenu,
}: MobileMenuProps) => {
  return (
    isMenuOpen && (
      <div className="md:hidden fixed inset-0 z-50 bg-white/50 backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg animate-slideDown">
          <div className="p-4 border-b flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Закрыть меню"
            >
              ✕
            </button>
          </div>

          {/* Навигация */}
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/" onClick={toggleMenu} className="text-black hover:text-blue-600 py-2 flex items-center gap-2">
              <FaHome className="text-blue-500" /> Главная
            </Link>
            <Link href="/search" onClick={toggleMenu} className="text-black hover:text-blue-600 py-2 flex items-center gap-2">
              <FaSearch className="text-blue-500" /> Поиск
            </Link>
            <Link href="/about" onClick={toggleMenu} className="text-black hover:text-blue-600 py-2 flex items-center gap-2">
              <FaInfoCircle className="text-blue-500" /> О проекте
            </Link>
            <Link href="/laureates" onClick={toggleMenu} className="text-black hover:text-blue-600 py-2 flex items-center gap-2">
              <FaMedal className="text-blue-500" /> Лауреаты
            </Link>
            <Link href="/ranks" onClick={toggleMenu} className="text-black hover:text-blue-600 py-2 flex items-center gap-2">
              <FaMedal className="text-blue-500" /> Система званий
            </Link>
            <Link href="/awards" onClick={toggleMenu} className="text-black hover:text-blue-600 py-2 flex items-center gap-2">
              <FaAward className="text-blue-500" /> Премии
            </Link>
            <Link href="/voting" onClick={toggleMenu} className="text-black hover:text-blue-600 py-2 flex items-center gap-2">
              <FaVoteYea className="text-blue-500" /> Голосования
            </Link>
            <Link href="/news" onClick={toggleMenu} className="text-black hover:text-blue-600 py-2 flex items-center gap-2">
              <FaNewspaper className="text-blue-500" /> Новости
            </Link>

            {/* Кнопки */}
            <div className="mt-4 space-y-2">
              <Link
                href="/profile"
                onClick={toggleMenu}
                className="block w-full text-center py-2 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md"
              >
                Личный кабинет
              </Link>
            </div>
          </nav>
        </div>
      </div>
    )
  )
}

export default MobileMenu