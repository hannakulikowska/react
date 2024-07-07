import { Component } from 'react';
import './MainPage.scss';
import Header from '../../components/header/Header';
import SearchResults from '../../components/search-results/SearchResults';
import { MainPageState } from '../../types/mainPageState';
import fetchMovies from '../../services/api';

class MainPage extends Component<object, MainPageState> {
  constructor(props: object) {
    super(props);
    this.state = {
      results: [],
      error: null,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm') ?? '';
    await this.fetchResults(searchTerm);
  }

  fetchResults = async (searchTerm: string) => {
    try {
      const results = await fetchMovies(searchTerm);
      this.setState({ results });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  handleSearch = (searchTerm: string) => {
    this.fetchResults(searchTerm).catch(() => {
      this.setState({ error: 'Error handling search' });
    });
  };

  render() {
    return (
      <div className="container">
        <Header onSearch={this.handleSearch} />
        <main className="main">
          <SearchResults movies={this.state.results} />
        </main>
      </div>
    );
  }
}

export default MainPage;
