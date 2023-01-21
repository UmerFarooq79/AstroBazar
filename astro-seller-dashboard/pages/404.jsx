import React from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
    return (
        <div className="ps-page--404">
            <figure className="ps-block--notfound">
                <h3>Ohh! Page not found</h3>
                <p>
                    It seems we can't find what you're looking for. <br />
                </p>
                <p>
                    <strong className="mr-2">Return to</strong>
                    <Link href="/">
                        <a className="ps-btn ps-btn--black ps-btn--rounded ps-btn--sm">
                            Dashboard
                        </a>
                    </Link>
                </p>
            </figure>
        </div>
    );
}

export default Error;
