import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='flex w-full grow flex-col items-center justify-center space-y-6 text-center'>
      <h1 className='text-4xl font-bold tracking-tight'>
        Nie czytać o zmierzchu
      </h1>
      <p className='text-lg text-[var(--color-text-secondary)]'>
        Opowiadania grozy: horror, weird fiction, zapomniana klasyka.
      </p>
      <Link
        href='/stories'
        className='inline-block rounded-md bg-[var(--color-accent)] px-6 py-3 font-semibold text-black shadow transition hover:shadow-lg'
      >
        Przeglądaj historie →
      </Link>
    </div>
  );
}
