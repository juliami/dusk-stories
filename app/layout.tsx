import type { Metadata } from "next";
import "./globals.css";

import Head from "next/head";

export const metadata: Metadata = {
  title: "Nie czytać o zmierzchu"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Short Horror Stories</title>
      </Head>
      <body
        className="justify-center"
      >
     <main className="max-w-4xl mx-auto text-[var(--color-text-primary)] w-full flex flex-col
 min-h-screen px-4">
        {children}
    </main>
      </body>
    </html>
  );
}
