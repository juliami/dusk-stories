import {client} from './client';
import {TypeStorySkeleton } from './types';

export async function getPosts() {
  const entries = await client.getEntries({ content_type: 'post' })
  return entries.items
}
export async function getStories() {
  const entries = await client.getEntries<TypeStorySkeleton>({ content_type: 'story' })
  return entries.items
}

export async function getStoryBySlug(slug: string) {
  const entries = await client.getEntries<TypeStorySkeleton>({
    content_type: 'story',
    'fields.slug': slug,
    limit: 1,
  });

  return entries.items[0]?.fields ?? null;
}

export async function getAllStorySlugs(): Promise<string[]> {
  const entries = await client.getEntries<TypeStorySkeleton>({
    content_type: 'story',
    select: ['fields.slug'],
  });

  return entries.items.map((item) => item.fields.slug);
}