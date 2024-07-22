import { SearchResult } from '../../types';

export type SearchItemProps = Omit<SearchResult, 'id'> &
  React.HTMLAttributes<HTMLDivElement>;
