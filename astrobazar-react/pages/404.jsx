import React from 'react';
import Link from 'next/link';

import FooterDefault from '../components/shared/footers/FooterDefault';
import HeaderDefault from '../components/shared/headers/HeaderDefault';

function Error({ statusCode }) {
    return (
        <div className="site-content">
            <HeaderDefault />
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        <figure>
                            <img src="/static/img/404.jpg" alt="" />
                            <h3>Ohh! Page not found</h3>
                            <p>
                                It seems we can't find what you're looking for.{' '}
                                <br />
                                Go back to
                                <Link href="/">
                                    <a> Homepage</a>
                                </Link>
                            </p>
                        </figure>
                    </div>
                </div>
            </div>
            <FooterDefault />
        </div>
    );
}

export default Error;
