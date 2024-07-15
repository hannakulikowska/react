import { Component, ChangeEvent, FormEvent } from 'react';
import './SearchForm.scss';
import {
  saveSearchTermToLocalStorage,
  getSearchTermFromLocalStorage,
} from '../../../utils/localStorage';
import { SearchFormProps } from '../../../types/searchFormProps';
import { SearchFormState } from '../../../types/searchFormState';

class SearchForm extends Component<SearchFormProps, SearchFormState> {
  constructor(props: SearchFormProps) {
    super(props);

    const savedSearchTerm = getSearchTermFromLocalStorage();
    this.state = {
      searchTerm: savedSearchTerm.trim(),
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const trimmedTerm = searchTerm.trim();
    saveSearchTermToLocalStorage(trimmedTerm);
    this.props.onSearch(trimmedTerm);
  };

  render() {
    return (
      <form className="header__search-form search-form" onSubmit={this.handleSubmit}>
        <input
          className="search-form__input"
          aria-label="Search"
          placeholder="Search..."
          type="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button className="search-form__button button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
