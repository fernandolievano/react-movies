import React from 'react'; 
import { ButtonBackToHome } from '../components/ButtonBackToHome';

export const NotFound = () => (
    <section className="section">
        <div className="container">
            <h2 className="is-size-2 has-text-danger">
                404, not found.
            </h2>
            <hr/>
            <p className="has-text-centered">
                <ButtonBackToHome />
            </p>
        </div>
    </section>
);