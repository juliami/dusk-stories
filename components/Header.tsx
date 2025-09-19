'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const links = [
    { href: "/collections", label: "Zbiory" },
    { href: "/stories", label: "Opowiadania" },
  ]

  return (
    <header className="flex w-full items-center justify-between py-4 mb-4 border-b border-[var(--color-border)]">
      {/* Logo + tytuł */}
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

      {/* Nawigacja */}
      <nav className="flex gap-6">
        {links.map(({ href, label }) => {
          const isActive = pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                isActive
                  ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)] pb-1"
                  : "hover:text-[var(--color-accent)] text-[var(--color-text-primary)]"
              }`}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
