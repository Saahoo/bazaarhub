'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';

export default function SettingsPage() {
<<<<<<< HEAD
  const [user, setUser] = useState<any>(null);
=======
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    newListings: true,
    messages: true,
    reviews: true,
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showPhone: false,
  });
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
<<<<<<< HEAD
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
=======
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
      setIsLoading(false);
    };

    fetchUser();
<<<<<<< HEAD
=======
    // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  }, []);

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handlePrivacyChange = (key: string) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleSaveSettings = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          notifications,
          privacy,
        },
      });

      if (error) {
        alert('Error saving settings: ' + error.message);
      } else {
        alert('Settings saved successfully');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Settings
        </h1>

        {/* Notifications Tab */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Notification Settings
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Email Notifications
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive notifications via email
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.emailNotifications}
                  onChange={() => handleNotificationChange('emailNotifications')}
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Push Notifications
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive push notifications
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.pushNotifications}
                  onChange={() => handleNotificationChange('pushNotifications')}
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    New Listings
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get notified about new listings
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.newListings}
                  onChange={() => handleNotificationChange('newListings')}
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Messages
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Be notified of new messages
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.messages}
                  onChange={() => handleNotificationChange('messages')}
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Reviews & Ratings
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get notified when you receive reviews
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.reviews}
                  onChange={() => handleNotificationChange('reviews')}
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Privacy Tab */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        {/* Privacy Tab */}
          </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Profile Visibility
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Allow others to view your profile
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={privacy.profileVisible}
                  onChange={() => handlePrivacyChange('profileVisible')}
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Show Email Address
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Display email on your profile
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={privacy.showEmail}
                  onChange={() => handlePrivacyChange('showEmail')}
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Show Phone Number
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Display phone on your profile
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={privacy.showPhone}
                  onChange={() => handlePrivacyChange('showPhone')}
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

        {/* Account Tab */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Account
            </h2>

            <div className="space-y-4">
              <Button size="lg" className="w-full" onClick={handleSaveSettings} isLoading={isLoading}>
                Save All Settings
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={handleLogout}
              >
                Log Out
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                Delete Account
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
}
