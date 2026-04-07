import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Auth Error - BazaarHub',
};

export default function AuthError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Authentication Error
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          There was a problem signing you in. Please try again.
        </p>
        <div className="flex gap-4 flex-col">
          <Button size="lg" asChild>
            <Link href="/auth/login">
              Try Again
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
