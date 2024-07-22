import { FormEvent } from 'react';
import { SearchFormElement } from '../SearchPage/types';

export interface SearchFormProps {
  onSubmit: (e: FormEvent<SearchFormElement>) => void;
  loading: boolean;
}
