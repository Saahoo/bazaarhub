'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname.includes(href);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="sticky top-0">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <Link href="/admin" className="text-xl font-bold text-gray-900 dark:text-white">
              Admin Panel
            </Link>
          </div>

          <nav className="p-6 space-y-2">
            <Link
              href="/admin"
              className={`block px-4 py-2 rounded-lg transition ${
                pathname.endsWith('/admin')
                  ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Dashboard
            </Link>

            <Link
              href="/admin/vehicle-management"
              className={`block px-4 py-2 rounded-lg transition ${
                isActive('/vehicle-management')
                  ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Vehicle Management
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
