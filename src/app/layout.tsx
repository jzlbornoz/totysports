import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '../styles/globals.css'

export const metadata = {
  description: 'Web Site oficial de TOTY Sports',
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '../assets/logo.png',
      {
        url: '../assets/logo.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
