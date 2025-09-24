import type { Metadata } from 'next';
import './globals.css';

import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Nie czytać o zmierzchu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <title>Short Horror Stories</title>
      </Head>
      <body className='justify-center'>
        <main className='mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 text-[var(--color-text-primary)]'>
          {children}
        </main>
      </body>
    </html>
  );
}
