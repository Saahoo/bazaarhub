'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { key: 'dashboard', icon: 'M3 12l2-12v12H3zm0 0h18', href: '/admin' },
  { key: 'listings', icon: 'M9 19V6l12 6-12 6v-6zm0 0v6h12v-6H9z', href: '/admin/listings' },
  { key: 'users', icon: 'M12 4.354a4 4 0 110 8 4 4 0 010-8zm0 0a8 8 0 100 16 8 8 0 000-16z', href: '/admin/users' },
  { key: 'reports', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6', href: '/admin/reports' },
  { key: 'settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', href: '/admin/settings' },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gray-900 text-white 
                     overflow-y-auto border-r border-gray-800">
      <nav className="space-y-2 p-4">
        {sidebarItems.map((item) => {
          const href = item.href;
          const isActive = pathname.startsWith(href);
          
          return (
            <Link
              key={item.key}
              href={href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              )}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-sm font-medium">{t(`admin.${item.key}`)}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
