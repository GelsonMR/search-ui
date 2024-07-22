import { Button, Container, Input } from './styled';
import { SearchFormProps } from './types';

export function SearchForm({ onSubmit, loading }: SearchFormProps) {
  return (
    <form name="SearchForm" onSubmit={onSubmit}>
      <Container>
        <Input
          name="query"
          type="text"
          placeholder="Type your search"
          autoFocus
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Loading' : 'Search'}
        </Button>
      </Container>
    </form>
  );
}
