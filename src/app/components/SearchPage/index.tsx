import { FormEvent, useState } from 'react';
import { SearchForm } from './types';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults } from '../../services';
import { CategoryDisplay } from '../../types';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const { data, isFetching } = useQuery({
    queryKey: ['search', query],
    queryFn: () => getSearchResults(query),
    enabled: !!query,
  });

  const handleSubmit = (e: FormEvent<SearchForm>) => {
    e.preventDefault();
    setQuery(e.currentTarget.elements.query.value);
  };

  return (
    <div>
      <header>
        <h1>🦁 SearchLion</h1>
      </header>
      <form name="SearchForm" onSubmit={handleSubmit}>
        <div>
          <input name="query" type="text" placeholder="Search" />
          <button type="submit" disabled={isFetching}>
            {isFetching ? 'Loading' : 'Search'}
          </button>
        </div>
      </form>
      {!isFetching && data?.length === 0 && (
        <div>No results found for "{query}"</div>
      )}
      {data?.map(({ id, title, description, url, category }) => (
        <a key={id} href={url} target="_blank" rel="noreferrer">
          <div>
            [{CategoryDisplay[category]}] {title}
          </div>
          <div>{description}</div>
        </a>
      ))}
    </div>
  );
}
