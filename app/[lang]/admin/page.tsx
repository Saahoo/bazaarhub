'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Manage your marketplace settings and data
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vehicle Management Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Vehicle Management
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Add, edit, or remove vehicle types, makes, models, options, and engine sizes
              </p>
            </div>
            <Link href="/vehicle-management">
              <Button className="w-full">
                Manage Vehicles
              </Button>
            </Link>
          </div>

          {/* Real Estate Management Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-200 dark:border-gray-700 hover:shadow-md transition opacity-50 cursor-not-allowed">
            <div className="mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Real Estate Management
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Manage property types, locations, and amenities
              </p>
            </div>
            <Button disabled className="w-full">
              Coming Soon
            </Button>
          </div>

          {/* Electronics Management Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-200 dark:border-gray-700 hover:shadow-md transition opacity-50 cursor-not-allowed">
            <div className="mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Electronics Management
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Manage device categories and specifications
              </p>
            </div>
            <Button disabled className="w-full">
              Coming Soon
            </Button>
          </div>

          {/* Users Management Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-200 dark:border-gray-700 hover:shadow-md transition opacity-50 cursor-not-allowed">
            <div className="mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                User Management
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Manage user accounts and permissions
              </p>
            </div>
            <Button disabled className="w-full">
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
