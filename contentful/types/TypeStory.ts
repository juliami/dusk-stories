import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeStoryFields {
    title: EntryFieldTypes.Symbol;
    author?: EntryFieldTypes.Symbol;
    publicationYear?: EntryFieldTypes.Integer;
    synopsis?: EntryFieldTypes.RichText;
    rating?: EntryFieldTypes.Integer;
    slug: EntryFieldTypes.Symbol
}

export type TypeStorySkeleton = EntrySkeletonType<TypeStoryFields, "story">;
export type TypeStory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeStorySkeleton, Modifiers, Locales>;
