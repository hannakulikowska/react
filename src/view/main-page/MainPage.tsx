import { Component } from 'react';
import './MainPage.scss';
import Header from '../../components/header/Header';
import SearchResults from '../../components/search-results/SearchResults';
import { MainPageState } from '../../types/mainPageState';

class MainPage extends Component<object, MainPageState> {
  constructor(props: object) {
    super(props);
    this.state = {
      results: [],
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <main className="main">
          <SearchResults results={this.state.results} />
        </main>
      </div>
    );
  }
}

export default MainPage;
