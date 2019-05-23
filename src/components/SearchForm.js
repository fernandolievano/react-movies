import React, { Component } from 'react';

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = e => {
        this.setState({ inputMovie: e.target.value });
    }

    _handleSubmit = e => {
        e.preventDefault();
        const { inputMovie } = this.state;
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = "0" } = results;
                this.props.onResults(Search, totalResults);
            });
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            placeholder="Find a movie..."
                            onChange={this._handleChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-primary">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}