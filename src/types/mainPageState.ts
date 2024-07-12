import { Movie } from './movie';

export interface MainPageState {
  results: Movie[];
  error: string | null;
  searchTerm: string;
  isLoading: boolean;
}
