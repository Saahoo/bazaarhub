'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    bio: '',
    phone: '',
    location: '',
    avatar: '',
  });
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (user) {
        setFormData({
          fullName: user.user_metadata?.full_name || '',
          bio: user.user_metadata?.bio || '',
          phone: user.user_metadata?.phone || '',
          location: user.user_metadata?.location || '',
          avatar: user.user_metadata?.avatar || '',
        });
      }
      
      setIsLoading(false);
    };

    fetchUser();
<<<<<<< HEAD
=======
    // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.auth.updateUser({
      data: {
        full_name: formData.fullName,
        bio: formData.bio,
        phone: formData.phone,
        location: formData.location,
        avatar: formData.avatar,
      },
    });

    if (error) {
      alert('Error updating profile: ' + error.message);
    } else {
      alert('Profile updated successfully');
      setIsEditing(false);
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          Please sign in to view your profile
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Profile
          </h1>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? 'outline' : 'default'}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your full name"
                />
              </div>

              {/* Email (read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  disabled
                  value={user.email}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white
                             cursor-not-allowed opacity-75"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="+93 (XXX) XXX XXXX"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="City, Country"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <Button type="submit" isLoading={isLoading} size="lg" className="w-full">
                Save Changes
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Full Name
                </h2>
                <p className="text-lg text-gray-900 dark:text-white">
                  {formData.fullName || 'Not set'}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Email
                </h2>
                <p className="text-lg text-gray-900 dark:text-white">
                  {user.email}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Phone
                </h2>
                <p className="text-lg text-gray-900 dark:text-white">
                  {formData.phone || 'Not set'}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Location
                </h2>
                <p className="text-lg text-gray-900 dark:text-white">
                  {formData.location || 'Not set'}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Bio
                </h2>
                <p className="text-lg text-gray-900 dark:text-white">
                  {formData.bio || 'Not set'}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button variant="outline" size="lg" className="w-full">
                  Change Password
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
