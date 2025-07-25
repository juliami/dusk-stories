import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import Link from 'next/link';

type StoryCardProps = {
    title: string;
    author?: string;
    publicationYear?: number;
    rating?: number;
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    synopsis?: any; // rich text JSON
    slug?: string;
};

export default function StoryCard({
    title,
    author,
    publicationYear,
    rating,
    synopsis,
    slug,
}: StoryCardProps) {
    const plainText = synopsis ? documentToPlainTextString(synopsis) : '';
    const shortSynopsis = plainText.length > 250 ? plainText.slice(0, 250) + '…' : plainText;

    return (
        <Link
            href={`/stories/${slug}`}
            className="group block px-4 py-3 border-b border-[var(--color-border)] hover:bg-[var(--color-overlay)] transition-colors duration-200 group text-sm text-[var(--color-text-primary)]"
        >
            <div className="grid grid-cols-[180px_1fr_80px_100px] gap-4 items-start">
                <div className="self-center font-bold">
                    {author || '—'}
                </div>
                <div className="font-medium text-[var(--color-accent)] group-hover:underline">

                    {title}

                </div>

                <div className="text-[var(--color-text-secondary)] self-center text-center">
                    {publicationYear || '—'}
                </div>

                <div className="text-yellow-500 font-semibold self-center text-center">
                    {rating !== undefined ? `${rating}/5` : '—'}
                </div>
            </div>
            <div className="line-clamp-1 text-[var(--color-text-muted)]">
                {shortSynopsis}
            </div>
        </Link>
    );
}
