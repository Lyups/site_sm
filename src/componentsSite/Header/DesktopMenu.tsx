'use client'

import Link from 'next/link'
import { FaHome, FaInfoCircle, FaMedal, FaAward, FaVoteYea, FaNewspaper } from 'react-icons/fa'

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex space-x-4">
      <Link href="/" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium whitespace-nowrap">
        <FaHome className="mr-1 text-blue-500" /> Главная
      </Link>

      <Link href="/about" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium whitespace-nowrap">
        <FaInfoCircle className="mr-1 text-blue-500" /> О проекте
      </Link>

      <Link href="/laureates" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium whitespace-nowrap">
        <FaMedal className="mr-1 text-blue-500" /> Лауреаты
      </Link>

      <Link href="/ranks" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium whitespace-nowrap">
        <FaMedal className="mr-1 text-blue-500" /> Система званий
      </Link>

      <Link href="/awards" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium whitespace-nowrap">
        <FaAward className="mr-1 text-blue-500" /> Премии
      </Link>

      <Link href="/voting" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium whitespace-nowrap">
        <FaVoteYea className="mr-1 text-blue-500" /> Голосования
      </Link>

      <Link href="/news" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium whitespace-nowrap">
        <FaNewspaper className="mr-1 text-blue-500" /> Новости
      </Link>
    </nav>
  )
}

export default DesktopMenu