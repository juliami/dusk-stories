import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeCollectionSkeleton } from './TypeCollection';

export interface TypeStoryFields {
  title: EntryFieldTypes.Symbol;
  author?: EntryFieldTypes.Symbol;
  publicationYear?: EntryFieldTypes.Integer;
  synopsis?: EntryFieldTypes.RichText;
  rating?: EntryFieldTypes.Integer;
  slug?: EntryFieldTypes.Symbol;
  polish_title?: EntryFieldTypes.Symbol;
  collection?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeCollectionSkeleton>
  >;
}

export type TypeStorySkeleton = EntrySkeletonType<TypeStoryFields, 'story'>;
export type TypeStory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeStorySkeleton, Modifiers, Locales>;
