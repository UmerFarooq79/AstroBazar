import React from 'react';

const CardTopCountry = () => (
    <section className="ps-card ps-card--top-country">
        <div className="ps-card__header">
            <h4>Top Countries</h4>
        </div>
        <div className="ps-card__content">
            <div className="row">
                <div className="col-6">
                    <figure className="organge">
                        <figcaption>United States</figcaption>
                        <strong>80%</strong>
                    </figure>
                </div>
                <div className="col-6">
                    <figure className="red">
                        <figcaption>United Kingdom</figcaption>
                        <strong>65%</strong>
                    </figure>
                </div>
                <div className="col-6">
                    <figure className="green">
                        <figcaption>Germany</figcaption>
                        <strong>65%</strong>
                    </figure>
                </div>
                <div className="col-6">
                    <figure className="cyan">
                        <figcaption>Russia</figcaption>
                        <strong>35%</strong>
                    </figure>
                </div>
            </div>
            <img src="img/map-and-bundle.png" alt="" />
            <p>We only started collecting region data from January 2015</p>
        </div>
    </section>
);

export default CardTopCountry;
