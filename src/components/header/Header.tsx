import { Component } from 'react';
import './Header.scss';
import Logo from './logo/Logo';
import SearchForm from './search-form/SearchForm';
import { SearchFormProps } from '../../types/searchFormProps';

class Header extends Component<SearchFormProps> {
  throwError = () => {
    throw new Error('Test error');
  };

  render() {
    return (
      <header className="header">
        <Logo />
        <h1 className="header__title">Star Trek Movies</h1>
        <SearchForm onSearch={this.props.onSearch} />
        <button className="header__error button" onClick={this.throwError}>
          Throw Error
        </button>
      </header>
    );
  }
}

export default Header;
