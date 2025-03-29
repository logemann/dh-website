import Link from 'next/link'
import DashboardMenu from '@/components/DashboardMenu'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/dashboard" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold">Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="w-64 mr-8">
            <DashboardMenu />
          </div>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

