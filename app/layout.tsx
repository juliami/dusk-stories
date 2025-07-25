import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className="justify-center"
      >
     <main className="text-[var(--color-text-primary)] w-full flex items-center justify-center
 min-h-screen px-4">
        {children}
    </main>
      </body>
    </html>
  );
}
