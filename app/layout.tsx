import { lusitana } from '../styles/fonts';
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
