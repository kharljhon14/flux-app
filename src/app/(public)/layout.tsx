import { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen max-w-lg items-center justify-center mx-auto">
      {children}
    </main>
  );
}
