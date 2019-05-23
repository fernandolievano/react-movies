import React, { Component } from 'react';

import { MoviesList } from '../components/MoviesList';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';

export class Home extends Component {
    state = {
        results: [],
        usedSearch: false
    }

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true });
    }

    _renderResults = () => {
        return this.state.results.length === 0
            ? 'Sorry, results not found! :('
            : <MoviesList movies={this.state.results} />
    }
    render() {
    const { usedSearch } = this.state;
    return (
            <div className="">
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {
                    usedSearch
                        ? this._renderResults()
                        : <small>Use the form to search a movie.</small>
                }
            </div>
        );
    }
}