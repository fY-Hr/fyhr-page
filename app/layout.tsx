'use client';

import { lusitana } from '../styles/fonts';
import "../styles/globals.css";

import { usePathname } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased text-blue-900 w-screen`}>
        {pathname === '/'? '' : <Navbar />}  
        <div  className="container mx-auto lg:px-32 xl:px-64 px-7">
          {children}
        </div>
      </body>
    </html>
  );
}
