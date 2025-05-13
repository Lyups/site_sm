'use client'

import { useState } from 'react'
import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import SearchForm from './SearchForm'
import SearchButton from './SearchButton'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
    toggleSearch()
  }

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <DesktopMenu />
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-2">
            <SearchForm
              isSearchOpen={isSearchOpen}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              toggleSearch={toggleSearch}
              handleSearch={handleSearch}
            />
            {!isSearchOpen && <SearchButton isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />}
          </div>

          <div className="hidden md:flex space-x-2">
            <Link 
              href="/login" 
              className="py-2 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md shadow-sm transition duration-300"
            >
              Войти
            </Link>
            <Link 
              href="/register" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Регистрация
            </Link>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Открыть меню"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
            {/* Нужна логика, если <= 1025px ширина экрана, то это мобильная версия */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isSearchOpen={isSearchOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </div>
    </header>
  )
}

export default Header