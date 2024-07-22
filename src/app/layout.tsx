import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alfred - Your Workflow Concierge',
  description: 'Upload documents and manage workflows with Alfred',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <div className="max-w-2xl mx-auto py-8">
            <header className="bg-custom-blue text-white p-4 mb-6">
              <h1 className="text-2xl font-bold">Alfred</h1>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
