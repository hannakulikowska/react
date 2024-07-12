import { Component } from 'react';
import './SearchResultItem.scss';
import { Movie } from '../../../types/movie';

class SearchResultItem extends Component<Movie> {
  render() {
    const { title, usReleaseDate } = this.props;
    return (
      <article className="search-result-item">
        <h3 className="search-result-item__name">{title}</h3>
        <p className="search-result-item__description">{usReleaseDate}</p>
      </article>
    );
  }
}

export default SearchResultItem;
