import { Component } from 'react';
import './Header.scss';
import Logo from './logo/Logo';
import SearchForm from './search-form/SearchForm';
import { SearchFormProps } from '../../types/searchFormProps';

interface HeaderProps extends SearchFormProps {
  triggerError: () => void;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className="header">
        <Logo />
        <h1 className="header__title">Star Trek Movies</h1>
        <SearchForm
          onSearch={this.props.onSearch}
          initialSearchTerm={this.props.initialSearchTerm}
        />
        <button className="header__error button" onClick={this.props.triggerError}>
          Throw Error
        </button>
      </header>
    );
  }
}

export default Header;
