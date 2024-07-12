const BASE_URL = 'https://stapi.co/api/v1/rest';
import { Movie } from '../types/movie';
import { ApiResponse } from '../types/apiResponse';

async function fetchMovies(searchTerm: string, pageNumber = 0, pageSize = 10): Promise<Movie[]> {
  const url = new URL(`${BASE_URL}/movie/search`);

  if (searchTerm.trim()) {
    url.searchParams.append('title', searchTerm.trim());
  }

  url.searchParams.append('pageNumber', pageNumber.toString());
  url.searchParams.append('pageSize', pageSize.toString());

  const response: Response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Fetch response was not successful');
  }

  const data: ApiResponse = (await response.json()) as ApiResponse;

  return data.movies.map((movie) => ({
    title: movie.title,
    usReleaseDate: movie.usReleaseDate ?? movie.yearFrom?.toString() ?? 'No description available',
  }));
}

export default fetchMovies;
