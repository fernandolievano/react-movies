import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import { MoviesList } from './components/MoviesList';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';

class App extends Component {
  state = {
    results: []
  }

  _handleResults = (results) => {
    this.setState({ results });
  }

  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {
          this.state.results.length === 0
            ? 'Sin resultados'
            : <MoviesList movies={results} />
        }
      </div>
    );
  }
}

export default App;
