"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Overview', href: '/dashboard' },
  { name: 'Analytics', href: '/dashboard/analytics' },
  { name: 'Settings', href: '/dashboard/settings' },
]

export default function DashboardMenu() {
  const pathname = usePathname()

  return (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              isActive
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

