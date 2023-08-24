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
      <div>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </div>
    </SWRConfig>
  );
}
