import { FormEvent, useState } from 'react';
import { SearchForm } from './types';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults } from '../../services';

export function SearchPage() {
  const [query, setQuery] = useState('money');
  const { data } = useQuery({
    queryKey: ['search', query],
    queryFn: () => (query ? getSearchResults(query) : []),
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
          <button type="submit">Search</button>
        </div>
      </form>
      {data?.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
}
