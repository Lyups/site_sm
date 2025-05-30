'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Вызываем сразу при монтировании
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-blue-50 via-white to-blue-50'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Logo />
          </div>
          <DesktopMenu />
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Link 
                href="/search" 
                className="py-2 px-4 text-black hover:text-blue-600 transition duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
                Поиск
              </Link>
            </div>
          </div>

          <div className="hidden md:flex space-x-2">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Link 
                href="/profile" 
                className="py-2 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md shadow-sm transition duration-300"
              >
                Личный кабинет
              </Link>
            </div>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none transform hover:scale-110 active:scale-95 transition-transform duration-200"
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
        <MobileMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </header>
  )
}

export default Header