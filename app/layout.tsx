import './globals.css'
import Header from '../componentsSite/Header/Header'
import Footer from '../componentsSite/Footer/Footer'
import Breadcrumbs from '../componentsSite/Breadcrumbs'

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