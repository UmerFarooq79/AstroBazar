import React from 'react';
import Rating from '~/components/elements/Rating';
import Link from 'next/link';

const StoreDefault = ({ source }) => {
    return (
        <article className="ps-block--store-2">
            <div
                className="ps-block__content bg--cover"
                style={{
                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                }}>
                <figure>
                    <h4>
                        <Link href="/store/[slug]" as={`/store/${source.slug}`}>
                            <a>{source.name}</a>
                        </Link>
                    </h4>

                    <div className="ps-block__rating">
                        <Rating />
                    </div>
                    <p>{source.address}</p>
                    {source.phone && (
                        <p>
                            <i className="icon-telephone"></i> {source.phone}
                        </p>
                    )}
                </figure>
            </div>
            <div className="ps-block__author">
                <a className="ps-block__user" href="#">
                    <img
                        src="/static/img/vendor/store/vendor-150x150.jpg"
                        alt="martfury"
                    />
                </a>
                <Link href="/store/[slug]" as={`/store/${source.slug}`}>
                    <a className="ps-btn">Visit Store</a>
                </Link>
            </div>
        </article>
    );
};

export default StoreDefault;
