import Link from 'next/link'
import { FaHome, FaInfoCircle, FaMedal, FaAward, FaVoteYea, FaNewspaper } from 'react-icons/fa'

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link href="/" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
        <FaHome className="mr-2 text-blue-500" /> Главная
      </Link>
      <Link href="/About" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
        <FaInfoCircle className="mr-2 text-blue-500" /> О проекте
      </Link>
      <Link href="/Laureates" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
        <FaMedal className="mr-2 text-blue-500" /> Лауреаты
      </Link>
      <Link href="/awards" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
        <FaAward className="mr-2 text-blue-500" /> Система званий
      </Link>
      <Link href="/voting" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
        <FaVoteYea className="mr-2 text-blue-500" /> Голосования
      </Link>
      <Link href="/news" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
        <FaNewspaper className="mr-2 text-blue-500" /> Новости
      </Link>
    </nav>
  )
}

export default DesktopMenu