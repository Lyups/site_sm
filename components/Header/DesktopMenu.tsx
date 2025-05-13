import Link from 'next/link'

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link href="/" className="text-gray-700 hover:text-blue-600">Главная</Link>
      <Link href="/about" className="text-gray-700 hover:text-blue-600">О проекте</Link>
      <Link href="/ranks" className="text-gray-700 hover:text-blue-600">Система званий</Link>
      <Link href="/awards" className="text-gray-700 hover:text-blue-600">Премии</Link>
      <Link href="/voting" className="text-gray-700 hover:text-blue-600">Голосования</Link>
      <Link href="/news" className="text-gray-700 hover:text-blue-600">Новости</Link>
    </nav>
  )
}

export default DesktopMenu