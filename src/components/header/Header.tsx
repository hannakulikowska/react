import { Component } from 'react';
import './Header.scss';
import Logo from './logo/Logo';
import SearchForm from './search-form/SearchForm';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <SearchForm />
      </header>
    );
  }
}

export default Header;
