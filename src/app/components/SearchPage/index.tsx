import { FormEvent, useState } from 'react';
import { SearchFormElement } from './types';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults } from '../../services';
import { Container, Header, Title } from './styled';
import { SearchForm } from '../SearchForm';
import { ResultsList } from '../SearchList';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const { data, isFetching } = useQuery({
    queryKey: ['search', query],
    queryFn: () => getSearchResults(query),
    enabled: !!query,
  });

  const handleSubmit = (e: FormEvent<SearchFormElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.elements.query.value);
  };

  return (
    <Container>
      <Header>
        <Title>🦁 SearchLion</Title>
        <SearchForm onSubmit={handleSubmit} loading={isFetching} />
      </Header>
      <ResultsList data={data} loading={isFetching} query={query} />
    </Container>
  );
}
