import {client} from './client';
import {TypeStorySkeleton, TypeCollectionSkeleton } from './types';
import { normalizeCollection, normalizeStory, isDefined} from './utils';

export async function getPosts() {
  const entries = await client.getEntries({ content_type: 'post' })
  return entries.items
}
export async function getStories(query?: string) {
  const entries = await client.getEntries<TypeStorySkeleton>({ content_type: 'story', query })
  return entries.items.map(item => normalizeStory(item));
}

export async function getStoryBySlug(slug: string) {
  const entries = await client.getEntries<TypeStorySkeleton>({
    content_type: 'story',
    'fields.slug': slug,
    limit: 1,
  });
  
  return normalizeStory(entries.items[0]) ?? null;
}

export async function getAllStorySlugs(): Promise<string[]> {
  const entries = await client.getEntries<TypeStorySkeleton>({
    content_type: 'story',
    select: ['fields.slug'],
  });

  return entries.items.map((item) => item.fields.slug || '');
}

export async function getCollections(query?: string) {
  const entries = await client.getEntries<TypeCollectionSkeleton>({ content_type: 'collection', query })
  return entries.items.map(item => normalizeCollection(item)).filter(isDefined)
}
export async function getCollectionBySlug(slug: string) {
  const entries = await client.getEntries<TypeCollectionSkeleton>({
    content_type: 'collection',
    'fields.slug': slug,
    limit: 1,
  });

  return normalizeCollection(entries.items[0]) ?? null;
}