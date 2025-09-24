import { getStoryBySlug } from '@/lib/contentful/fetch';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import CollectionListItem from '@/components/CollectionListItem';
import { Collection } from '@/lib/types';

function getFirstSentences(text: string, count: number = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  if (!sentences) return text;
  return sentences.slice(0, count).join(' ').trim();
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    return {
      title: 'Nie znaleziono opowiadania – Nie czytać o zmierzchu',
    };
  }
  const storySynopsis = story.synopsis ?? '';

  return {
    title: `${story.title} – Nie czytać o zmierzchu`,
    description: `${getFirstSentences(storySynopsis, 2)}`,
  };
}

const StoryCollectionsList = ({
  collections,
}: {
  collections: Collection[];
}) => {
  return (
    <>
      <h2 className='mb-2 text-xl font-bold tracking-tight'>Zbiory</h2>
      {collections?.map((collection) => (
        <CollectionListItem key={collection.id} {...collection} />
      ))}
    </>
  );
};

export default async function StoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) return notFound();

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

        <h1 className='text-3xl font-bold tracking-tight'>{story.title}</h1>

        <p className='mt-2 text-[var(--color-text-secondary)] italic'>
          {story.author && `✍️ ${story.author}`}{' '}
          {story.year && `· 🕯️ ${story.year}`}
        </p>

        {story.rating !== undefined && (
          <p className='mt-2 text-yellow-500'>⭐ Ocena: {story.rating}/5</p>
        )}

        <article className='prose prose-invert prose-sm md:prose-base mb-4 leading-relaxed'>
          {story.synopsis}
        </article>
        {story.collections && (
          <StoryCollectionsList collections={story.collections} />
        )}
      </section>
    </>
  );
}
