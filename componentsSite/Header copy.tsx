import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-8">
            <div className="font-bold text-2xl text-blue-700">СПУТНИК МИРА</div>
            <div className="text-xs text-gray-500">Благотворительный фонд им. К.Э. Циолковского</div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Главная</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">О проекте</Link>
            <Link href="/ranks" className="text-gray-700 hover:text-blue-600">Система званий</Link>
            <Link href="/awards" className="text-gray-700 hover:text-blue-600">Премии</Link>
            <Link href="/voting" className="text-gray-700 hover:text-blue-600">Голосования</Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-600">Новости</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-gray-700">
            {/* Поиск */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg> */}
          </button>
          <Link 
            href="/login" 
            className="w-full flex justify-center py-2 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md shadow-sm transition duration-300 focus:outline-none">
            Войти
          </Link>
          <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded-lg hidden md:block">
            Регистрация
          </Link>
          <button className="md:hidden text-gray-700">
            {/* Меню для мобильных устройств */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header