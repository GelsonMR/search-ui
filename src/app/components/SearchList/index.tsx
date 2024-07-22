import { Category } from '../../types';
import { SearchItem } from '../SearchItem';
import { Container } from './styled';
import { ResultsListProps } from './types';

const CategoryDisplay: Record<Category, string> = {
  VIDEOS: 'Video',
  PLAYLISTS: 'Playlist',
  BLOG_POSTS: 'Blog post',
};

export function ResultsList({ data, loading, query }: ResultsListProps) {
  return (
    <Container>
      {!loading && data?.length === 0 && (
        <div>No results found for "{query}"</div>
      )}
      {data?.map(({ id, title, description, url, category }) => (
        <SearchItem
          key={id}
          title={title}
          description={description}
          url={url}
          category={category}
        />
      ))}
    </Container>
  );
}
