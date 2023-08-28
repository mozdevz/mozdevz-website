import Header from '@/components/Header';
import './globals.css'
import { Hind, Raleway } from '@next/font/google';
import Footer from '@/components/Footer';

const hind = Hind({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-hind',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ["600", "700"],
  variable: '--font-raleway',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${hind.variable} ${raleway.variable} font-body`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
