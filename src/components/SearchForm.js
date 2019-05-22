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
        alert(this.state.inputMovie);
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            placeholder="Search a movie..."
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