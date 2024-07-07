import { Component } from 'react';
import './SearchResultItem.scss';
import { Result } from '../../../types/result';

class SearchResultItem extends Component<Result> {
  render() {
    const { name, description } = this.props;
    return (
      <article className="search-result-item">
        <h2 className="search-result-item__name">{name}</h2>
        <p className="search-result-item__description">{description}</p>
      </article>
    );
  }
}

export default SearchResultItem;
