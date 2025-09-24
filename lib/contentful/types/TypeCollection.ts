import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeCollectionFields {
  title?: EntryFieldTypes.Symbol;
  publishingHouse?: EntryFieldTypes.Symbol;
  year?: EntryFieldTypes.Integer;
  cover?: EntryFieldTypes.AssetLink;
  slug?: EntryFieldTypes.Symbol;
}

export type TypeCollectionSkeleton = EntrySkeletonType<
  TypeCollectionFields,
  'collection'
>;
export type TypeCollection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCollectionSkeleton, Modifiers, Locales>;
