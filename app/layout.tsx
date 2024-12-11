import { lusitana } from '../styles/fonts';
import "../styles/globals.css";

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'fY-Hr',
  description: 'fY-Hr Personal Page'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${lusitana.className} antialiased text-blue-900 h-screen w-screen bg-white bg-scroll md:bg-fixed`}>
        <Navbar />
        <div  className="container mx-auto lg:px-32 xl:px-64 px-7 flex flex-col justify-between h-screen mt-4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
