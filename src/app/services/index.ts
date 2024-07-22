import { api } from '../api';
import { SearchResult } from '../types';

export const getSearchResults = (query: string): Promise<SearchResult[]> =>
  api.get('/data', { params: { search: query } }).then((res) => res.data);
