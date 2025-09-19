import Link from 'next/link';

const Header = () => (<header className="flex w-full items-center gap-4 py-4 mb-4 border-b border-[var(--color-border)]">
  <Link href="/" className="flex items-center gap-4">
    <img
      src="/logo.png"
      alt="Logo"
      className="h-16 w-16 object-contain"
    />
    <div>
      <h1 className="text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight">
        Nie czytać o zmierzchu
      </h1>
      <h2 className="text-sm text-[var(--color-text-secondary)]">
        „...było takie opowiadanie...”
      </h2>
    </div>
  </Link>
  
</header>)

export default Header;
