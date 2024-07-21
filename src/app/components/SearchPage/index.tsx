import { FormEvent } from 'react';
import { SearchForm } from './types';

export function SearchPage() {
  const handleSubmit = (e: FormEvent<SearchForm>) => {
    e.preventDefault();
    console.log(e.currentTarget.elements.query.value);
  };

  return (
    <div>
      <header>
        <h1>🦁 SearchLion</h1>
      </header>
      <form name="SearchForm" onSubmit={handleSubmit}>
        <div>
          <input name="query" type="text" required />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}
