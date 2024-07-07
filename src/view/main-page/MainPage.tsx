import { Component } from 'react';
import './MainPage.scss';
import Header from '../../components/header/Header';

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main className="main"></main>
      </div>
    );
  }
}

export default MainPage;
