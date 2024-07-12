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
      searchTerm: '',
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm') ?? '';
    this.setState({ searchTerm });
    await this.fetchResults(searchTerm);
  }

  fetchResults = async (searchTerm: string) => {
    this.setState({ isLoading: true });
    try {
      const results = await fetchMovies(searchTerm);
      this.setState({ results, error: null });
    } catch (error) {
      this.setState({ error: 'Error fetching movies' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = (searchTerm: string) => {
    const trimmedTerm = searchTerm.trim();
    localStorage.setItem('searchTerm', trimmedTerm);
  };

  triggerError = () => {
    this.setState({ error: 'Error handling search' });
  };

  render() {
    if (this.state.error) {
      throw new Error('Test error');
    }
    const { results, isLoading, error } = this.state;
    return (
      <div className="container">
        <Header
          onSearch={this.handleSearch}
          initialSearchTerm={this.state.searchTerm}
          triggerError={this.triggerError}
        />
        <main className="main">
          {error && <div className="error-message">{error}</div>}
          {isLoading ? (
            <div className="loader-wrapper">
              <div className="loader"></div>
            </div>
          ) : (
            <SearchResults movies={results} />
          )}
        </main>
      </div>
    );
  }
}

export default MainPage;
