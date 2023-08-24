import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
