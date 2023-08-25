'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { SWRConfig } from 'swr';
import fetcher from '@/utils/fetcher';

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <div className="flex flex-col h-screen max-w-lg m-auto items-center justify-center">
        <Header />
        <Navbar />
        <main className="w-full p-5 bg-gray-800 rounded-lg my-2">{children}</main>
        <Footer />
      </div>
    </SWRConfig>
  );
}
