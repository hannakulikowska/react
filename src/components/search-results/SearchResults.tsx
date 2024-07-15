import SearchResultItem from './search-result-item/SearchResultItem';
import { Component } from 'react';
import './SearchResults.scss';

interface SearchResultsProps {
  movies: { title: string; usReleaseDate: string }[];
}

class SearchResults extends Component<SearchResultsProps> {
  render() {
    const { movies } = this.props;
    return (
      <div className="search-results">
        {movies.map((movie, index) => (
          <SearchResultItem key={index} title={movie.title} usReleaseDate={movie.usReleaseDate} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
