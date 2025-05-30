import './globals.css'
import Header from '../componentsSite/Header'
import Footer from '../componentsSite/Footer'
import Breadcrumbs from '../componentsSite/Breadcrumbs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white font-montserrat">
        <Header />
        <main className="pt-24">
          <Breadcrumbs />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}