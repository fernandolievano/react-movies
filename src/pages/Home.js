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
            ? <div>
                <small className="notification is-danger">
                    Sorry, results not found
                    </small>
            </div>
            : (<MoviesList movies={this.state.results} />)
    }
    render() {
        const { usedSearch } = this.state;
        return (
            <section className="section">
                <article className="container">
                    <Title>React Movies</Title>
                    <div className="SearchForm-wrapper">
                        <SearchForm onResults={this._handleResults} />
                    </div>
                </article>
                <br />
                <article className="container has-text-centered">
                    {
                        usedSearch
                            ? this._renderResults()
                            : ""
                    }
                </article>
            </section>
        );
    }
}