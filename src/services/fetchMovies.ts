const BASE_URL = 'https://stapi.co/api/v1/rest/movie/search';

interface ApiResponse {
  movies: Movie[];
}

export interface Movie {
  title: string;
  usReleaseDate: string;
}

async function fetchMovies(searchTerm?: string): Promise<Movie[]> {
  const url = new URL(`${BASE_URL}`);

  if (searchTerm) {
    url.searchParams.append('title', searchTerm);
  }

  const response: Response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Fetch response was not successful');
  }

  const data: ApiResponse = (await response.json()) as ApiResponse;

  return data.movies.map((movie) => ({
    title: movie.title,
    usReleaseDate: movie.usReleaseDate,
  }));
}

export default fetchMovies;
