import { Category } from '../../types';
import { Badge, Link } from './styled';
import { SearchItemProps } from './types';

const CategoryDisplay: Record<Category, string> = {
  VIDEOS: 'Video',
  PLAYLISTS: 'Playlist',
  BLOG_POSTS: 'Blog post',
};

export function SearchItem({
  title,
  description,
  url,
  category,
  ...props
}: SearchItemProps) {
  return (
    <div {...props}>
      <Link href={url} target="_blank" rel="noreferrer">
        {title}
      </Link>
      <Badge>{CategoryDisplay[category]}</Badge>
      <div>{description}</div>
    </div>
  );
}
