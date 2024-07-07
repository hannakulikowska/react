import SearchResultItem from './search-result-item/SearchResultItem';
import { Component } from 'react';
import './SearchResults.scss';

interface SearchResultsProps {
  results: { name: string; description: string }[];
}

class SearchResults extends Component<SearchResultsProps> {
  render() {
    const { results } = this.props;
    return (
      <div className="search-results">
        {results.map((result, index) => (
          <SearchResultItem key={index} name={result.name} description={result.description} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
