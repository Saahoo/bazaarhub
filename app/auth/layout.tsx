import { RootProvider } from '@/components/providers/RootProvider';
import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <RootProvider>
      {children}
    </RootProvider>
  );
}
