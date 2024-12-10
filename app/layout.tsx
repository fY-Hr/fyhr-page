import { lusitana } from '../styles/fonts';
import "../styles/globals.css";

import Navbar from '@/components/ui/Navbar';
import Head from 'next/head';

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
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${lusitana.className} antialiased text-blue-900 w-screen`}>
        <Navbar />
        <div  className="container mx-auto lg:px-32 xl:px-64 px-7">
          {children}
        </div>
      </body>
    </html>
  );
}
