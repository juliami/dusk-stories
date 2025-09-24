import Link from 'next/link';
import type { Collection } from '@/lib/types';

export default function CollectionCard({
    title,
    publishingHouse,
    year,
    slug
}: Collection) {

    const titleText =  String(title) ?? undefined;
    const publishingHouseText =  String(publishingHouse) ?? undefined;
    const yearNumber = typeof year === 'number' ? year : undefined;
    const slugText = String(slug) ?? '';

    return (
        <Link
            href={`/collections/${slugText}`}
            className="group block px-4 py-3 border-b border-[var(--color-border)] hover:bg-[var(--color-overlay)] transition-colors duration-200 group text-sm text-[var(--color-text-primary)]"
        >
            <div className="grid grid-cols-[180px_1fr_80px_100px] gap-4 items-start">
                <div className="font-medium text-[var(--color-accent)] group-hover:underline">

                    {titleText}

                </div>
                     <div className="self-center">
                    {publishingHouseText || '—'}
                </div>

                <div className="text-[var(--color-text-secondary)] self-center text-center">
                    {yearNumber || '—'}
                </div>

            
            </div>
      
        </Link>
    );
}
