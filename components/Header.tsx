'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: '/collections', label: 'Zbiory' },
    { href: '/stories', label: 'Opowiadania' },
  ];

  return (
    <header className='mb-4 flex w-full items-center justify-between border-b border-[var(--color-border)] py-4'>
      {/* Logo + tytuł */}
      <Link href='/' className='flex items-center gap-4'>
        <img src='/logo.png' alt='Logo' className='h-16 w-16 object-contain' />
        <div>
          <h1 className='text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]'>
            Nie czytać o zmierzchu
          </h1>
          <h2 className='text-sm text-[var(--color-text-secondary)]'>
            „...było takie opowiadanie...”
          </h2>
        </div>
      </Link>

      {/* Nawigacja */}
      <nav className='flex gap-6'>
        {links.map(({ href, label }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                isActive
                  ? 'border-b-2 border-[var(--color-accent)] pb-1 text-[var(--color-accent)]'
                  : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]'
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
