'use client';

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const Search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const initialQuery = searchParams.get('query') || '';
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className='mb-4 flex w-full items-center gap-2'
    >
      <input
        name='query'
        type='text'
        placeholder='Szukaj opowiadania…'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-accent)] focus:outline-none'
      />
      <button
        type='submit'
        className='cursor-pointer rounded-md bg-[var(--color-accent)] px-4 py-2 text-white transition-colors duration-200 hover:bg-[var(--color-overlay)]'
      >
        Szukaj
      </button>
    </form>
  );
};

export default Search;
