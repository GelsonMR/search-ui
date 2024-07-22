import { FormEvent, useState } from 'react';
import { SearchForm } from './types';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults } from '../../services';
import { CategoryDisplay } from '../../types';
import {
  Button,
  CategoryBadge,
  Container,
  Header,
  Input,
  Link,
  ResultsContainer,
  SearchContainer,
  Title,
} from './styled';

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
    <Container>
      <Header>
        <Title>🦁 SearchLion</Title>
        <form name="SearchForm" onSubmit={handleSubmit}>
          <SearchContainer>
            <Input
              name="query"
              type="text"
              placeholder="Type your search"
              autoFocus
            />
            <Button type="submit" disabled={isFetching}>
              {isFetching ? 'Loading' : 'Search'}
            </Button>
          </SearchContainer>
        </form>
      </Header>
      <ResultsContainer>
        {!isFetching && data?.length === 0 && (
          <div>No results found for "{query}"</div>
        )}
        {data?.map(({ id, title, description, url, category }) => (
          <div key={id}>
            <Link href={url} target="_blank" rel="noreferrer">
              {title}
            </Link>
            <CategoryBadge>{CategoryDisplay[category]}</CategoryBadge>
            <div>{description}</div>
          </div>
        ))}
      </ResultsContainer>
    </Container>
  );
}
