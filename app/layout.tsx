import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white font-montserrat ">
        <Header />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  )
}