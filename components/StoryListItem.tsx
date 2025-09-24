import { Story } from '@/lib/types';
import Link from 'next/link';

export default function StoryListItem({
  title,
  author,
  year,
  rating,
  synopsis,
  slug,
}: Story) {
  const plainText = synopsis ?? '';
  const shortSynopsis =
    plainText.length > 250 ? plainText.slice(0, 250) + '…' : plainText;

  return (
    <Link
      href={`/stories/${slug}`}
      className='group group block border-b border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-primary)] transition-colors duration-200 hover:bg-[var(--color-overlay)]'
    >
      <div className='grid grid-cols-[180px_1fr_80px_100px] items-start gap-4'>
        <div className='self-center font-bold'>{author || '—'}</div>
        <h3 className='font-medium text-[var(--color-accent)] group-hover:underline'>
          {title}
        </h3>
        <div className='self-center text-center text-[var(--color-text-secondary)]'>
          {year || '—'}
        </div>
        <div className='self-center text-center font-semibold text-yellow-500'>
          {rating !== undefined ? `${rating}/5` : '—'}
        </div>
      </div>
      <div className='line-clamp-1 text-[var(--color-text-muted)]'>
        {shortSynopsis}
      </div>
    </Link>
  );
}
