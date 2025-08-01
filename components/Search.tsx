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
      className="flex items-center gap-2 w-full mb-4"
    >
      <input
        name="query"
        type="text"
        placeholder="Szukaj opowiadania…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] placeholder-[var(--color-text-secondary)]"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[var(--color-accent)] text-white rounded-md hover:bg-[var(--color-overlay)] transition-colors duration-200 cursor-pointer"
      >
        Szukaj
      </button>
    </form>
  );
};

export default Search;
