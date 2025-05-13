import Link from 'next/link'

type MobileMenuProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
  isSearchOpen: boolean
  searchQuery: string
  setSearchQuery: (query: string) => void
  handleSearch: (e: React.FormEvent) => void
}

const MobileMenu = ({
  isMenuOpen,
  toggleMenu,
  isSearchOpen,
  searchQuery,
  setSearchQuery,
  handleSearch,
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

          {/* Поиск */}
          <form onSubmit={handleSearch} className="flex-1 flex items-center gap-2 p-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск..."
              className="w-full py-2 px-3 border rounded-lg focus:outline-blue-500 text-black"
              autoFocus
            />
          </form>

          {/* Навигация */}
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 py-2">
              Главная
            </Link>
            <Link href="/about" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 py-2">
              О проекте
            </Link>
            <Link href="/ranks" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 py-2">
              Система званий
            </Link>
            <Link href="/awards" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 py-2">
              Премии
            </Link>
            <Link href="/voting" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 py-2">
              Голосования
            </Link>
            <Link href="/news" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 py-2">
              Новости
            </Link>

            {/* Кнопки */}
            <div className="mt-4 space-y-2">
              <Link
                href="/login"
                onClick={toggleMenu}
                className="block w-full text-center py-2 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md"
              >
                Войти
              </Link>
              <Link
                href="/register"
                onClick={toggleMenu}
                className="block w-full text-center py-2 px-4 bg-green-600 text-white rounded-lg"
              >
                Регистрация
              </Link>
            </div>
          </nav>
        </div>
      </div>
    )
  )
}

export default MobileMenu