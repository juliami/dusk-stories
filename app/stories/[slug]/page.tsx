

import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { getStoryBySlug } from '@/contentful/fetch'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import type { Metadata } from "next";


function getFirstSentences(text: string, count: number = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  if (!sentences) return text;
  return sentences.slice(0, count).join(' ').trim();
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    return {
      title: 'Nie znaleziono opowiadania – Nie czytać o zmierzchu',
    };
  }
     const storySynopsis = story.synopsis ? documentToPlainTextString(story.synopsis) : '';

  return {
    title: `${story.title} – Nie czytać o zmierzchu`,
    description: `${getFirstSentences(storySynopsis, 2)}`


  }
}


export default async function StoryPage({ params }: { params: Params }) {
  const { slug }  = await params;
    const story = await getStoryBySlug(slug);

    if (!story) return notFound(); 


     const storySynopsis = story.synopsis ? documentToPlainTextString(story.synopsis) : '';
return (
<>
  <Head>
        <title>Short Horror Stories</title>
  </Head>
      
 <section className="max-w-4xl">
      <nav className="text-sm mb-6">
    <Link href="/stories" className="text-[var(--color-accent)] hover:underline">
      ← Powrót do listy
    </Link>
  </nav>

  <h1 className="text-3xl font-bold tracking-tight">{story.title}</h1>

  <p className="text-[var(--color-text-secondary)] mt-2 italic">
    {story.author && `✍️ ${story.author}`} {story.publicationYear && `· 🕯️ ${story.publicationYear}`}
  </p>

  {story.rating !== undefined && (
    <p className="mt-2 text-yellow-500">⭐ Ocena: {story.rating}/5</p>
  )}

  <article className="prose prose-invert prose-sm md:prose-base mt-6 leading-relaxed">
    {storySynopsis}
  </article>
</section>
</>    
)}