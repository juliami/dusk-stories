import Link from 'next/link';

type CollectionCardProps = {
    title?: string;
    year?: number;
    publishingHouse?: string;
    slug?: string;
};

export default function CollectionCard({
    title,
    publishingHouse,
    year,
    slug
}: CollectionCardProps) {

    return (
        <Link
            href={`/stories/${slug}`}
            className="group block px-4 py-3 border-b border-[var(--color-border)] hover:bg-[var(--color-overlay)] transition-colors duration-200 group text-sm text-[var(--color-text-primary)]"
        >
            <div className="grid grid-cols-[180px_1fr_80px_100px] gap-4 items-start">
                <div className="font-medium text-[var(--color-accent)] group-hover:underline">

                    {title}

                </div>
                     <div className="self-center">
                    {publishingHouse || '—'}
                </div>

                <div className="text-[var(--color-text-secondary)] self-center text-center">
                    {year || '—'}
                </div>

            
            </div>
      
        </Link>
    );
}
