import Link from 'next/link';
import type { Collection } from '@/lib/types';

export default function CollectionCard({
  title,
  publishingHouse,
  year,
  slug,
}: Collection) {
  const titleText = String(title) ?? undefined;
  const publishingHouseText = String(publishingHouse) ?? undefined;
  const yearNumber = typeof year === 'number' ? year : undefined;
  const slugText = String(slug) ?? '';

  return (
    <Link
      href={`/collections/${slugText}`}
      className='group group block border-b border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-primary)] transition-colors duration-200 hover:bg-[var(--color-overlay)]'
    >
      <div className='grid grid-cols-[180px_1fr_80px_100px] items-start gap-4'>
        <div className='font-medium text-[var(--color-accent)] group-hover:underline'>
          {titleText}
        </div>
        <div className='self-center'>{publishingHouseText || '—'}</div>

        <div className='self-center text-center text-[var(--color-text-secondary)]'>
          {yearNumber || '—'}
        </div>
      </div>
    </Link>
  );
}
