import { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
  render() {
    return (
      <form className="header__search-form search-form">
        <input
          className="search-form__input"
          aria-label="Search"
          placeholder="Search..."
          type="search"
        />
        <button className="search-form__button button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
