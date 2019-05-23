import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        const { movies } = this.props;
        return (
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline is-vcentered is-centered is-mobile">
                        {
                            movies.map(movie => (
                                <div key={movie.imdbID} className="column is-5-mobile is-6-tablet is-4-desktop">
                                    <Movie
                                        id={movie.imdbID}
                                        title={movie.Title}
                                        poster={movie.Poster}
                                        year={movie.Year}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
}