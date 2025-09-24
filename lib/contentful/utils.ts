import { ChainModifiers, Entry, UnresolvedLink } from 'contentful';
import { TypeStorySkeleton, TypeCollectionSkeleton } from './types';
import { Story, Collection } from '@/lib/types';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Document } from '@contentful/rich-text-types';

export function isDefined<T>(val: T | undefined | null): val is T {
  return val !== undefined && val !== null;
}
export function hasFields<T>(entry: unknown): entry is { fields: T } {
  return typeof entry === 'object' && entry !== null && 'fields' in entry;
}
export const normalizeCollection = (
  collection:
    | UnresolvedLink<'Entry'>
    | Entry<TypeCollectionSkeleton, ChainModifiers, string>
    | Entry<TypeCollectionSkeleton>
    | undefined,
): Collection | undefined => {
  if (!hasFields(collection)) {
    return undefined;
  }
  return {
    id: collection.sys.id || '',
    title: String(collection.fields.title),
    slug: String(collection.fields.slug) ?? undefined,
    publishingHouse: String(collection.fields.publishingHouse) ?? undefined,
    year:
      typeof collection.fields.year === 'number'
        ? collection.fields.year
        : undefined,
  };
};

export const normalizeStory = (story: Entry<TypeStorySkeleton>): Story => {
  return {
    id: story.sys.id,
    title: String(story.fields.title),
    slug: String(story.fields.slug) ?? undefined,
    author: String(story.fields.author) ?? undefined,
    rating:
      typeof story.fields.rating === 'number' ? story.fields.rating : undefined,
    synopsis: story.fields.synopsis
      ? documentToPlainTextString(story.fields.synopsis as Document)
      : undefined,
    year:
      typeof story.fields.publicationYear === 'number'
        ? story.fields.publicationYear
        : undefined,
    collections: Array.isArray(story.fields.collection)
      ? story.fields.collection
          .map((collection) => normalizeCollection(collection))
          .filter(isDefined)
      : [],
  };
};
