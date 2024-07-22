import { SearchResult } from '../../types';

export interface ResultsListProps {
  data?: SearchResult[];
  loading: boolean;
  query: string;
}
