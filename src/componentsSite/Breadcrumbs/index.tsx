'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useMemo, useEffect, useState } from 'react'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // связка названий с индексами
  const breadcrumbTitles = useMemo<Record<string, string>>(() => ({
    '': 'Главная',
    about: 'О проекте',
    ranks: 'Система званий',
    awards: 'Премии и конкурсы',
    voting: 'Голосования',
    news: 'Новости и события',
    login: 'Вход',
    register: 'Регистрация',
    profile: 'Профиль пользователя',
    laureates: 'Лауреаты',
    search: 'Поиск'
  }), [])

  // Убираем слеши и преобразуем в массив
  const pathSegments = useMemo(() =>
    pathname
      .split('/')
      .filter((segment) => segment !== ''),
    [pathname]
  )

  // Не отображать на главной странице или до монтирования
  if (pathname === '/' || !mounted) return null

  return (
    <div className="py-3 bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm">
          {pathSegments.length > 0 && (
            <>
              <Link 
                href="/" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Главная
              </Link>
              {pathSegments.map((segment, index) => {
                const path = '/' + pathSegments.slice(0, index + 1).join('/')
                const title = breadcrumbTitles[segment] || decodeURIComponent(segment)
                const isLast = index === pathSegments.length - 1

                return (
                  <span key={index} className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="mx-2 text-gray-400"
                    >
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {isLast ? (
                      <span className="text-gray-900 font-medium">{title}</span>
                    ) : (
                      <Link 
                        href={path} 
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {title}
                      </Link>
                    )}
                  </span>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
