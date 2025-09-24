import { getCollectionBySlug } from '@/lib/contentful/fetch';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: 'Nie znaleziono zbioru – Nie czytać o zmierzchu',
    };
  }

  return {
    title: `${collection.title} – Nie czytać o zmierzchu`,
    description: `${collection.publishingHouse} - ${collection.publishingHouse}`,
  };
}

export default async function CollectionPage({ params }: { params: Params }) {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) return notFound();

  return (
    <>
      <Header />
      <section className='max-w-4xl'>
        <nav className='mb-6 text-sm'>
          <Link
            href='/stories'
            className='text-[var(--color-accent)] hover:underline'
          >
            ← Powrót do listy
          </Link>
        </nav>

        <h1 className='text-3xl font-bold tracking-tight'>
          {collection.title}
        </h1>

        <p className='mt-2 text-[var(--color-text-secondary)] italic'>
          {collection.publishingHouse && `${collection.publishingHouse}`}{' '}
          {collection.year && `· ${collection.year}`}
        </p>
      </section>
    </>
  );
}
