import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonBackToHome } from '../components/ButtonBackToHome';

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {
        movie: {}
    }

    _fetchMovie = ({ id }) => {
        fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                this.setState({ movie });
            });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this._fetchMovie({ id });
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot, Rated, Released, Runtime } = this.state.movie
        return (
            <section className="section card">
                <header>
                    <ButtonBackToHome />
                </header>
                <br />
                <div className="container">
                    <h1 className="title">{Title}</h1>
                    <h3 className="subtitle">{Runtime}</h3>
                    <p>
                        <b>{Rated}</b>
                    </p>
                    <img src={Poster} alt={Title} className="img" />
                    <p>
                        <small>
                            {Released}
                        </small>
                    </p>
                    <br />
                    <p>
                        <span className="tag is-info">{Metascore}</span>
                        <br />
                        <small>Metascore</small>
                    </p>
                    <br />
                    <article className="notification">
                        <h5 className="is-size-6 has-text-dark">Cast</h5>
                        <h3 className="subtitle">{Actors}</h3>
                    </article>
                    <article className="notification">
                        <h5 className="is-size-6 has-text-dark">Plot</h5>
                        <p>{Plot}</p>
                    </article>
                </div>
            </section>
        );
    }
}