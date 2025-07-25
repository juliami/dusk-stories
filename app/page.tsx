import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-xl text-center space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">
        Nie czytać o zmierzchu
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)]">
        Opowiadania grozy: horror, weird fiction, zapomniana klasyka.
      </p>
      <Link
        href="/stories"
        className="inline-block bg-[var(--color-accent)] text-black px-6 py-3 rounded-md font-semibold shadow hover:shadow-lg transition"
      >
        Przeglądaj historie →
      </Link>
    </div>
  );
}