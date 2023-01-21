import React from 'react';
import LazyLoad from 'react-lazyload';
import { baseUrl } from '~/repositories/Repository';
import { formatCurrency } from '~/utilities/product-helper';
import Link from 'next/link';

function getImageURL(source, size) {
    let image, imageURL;

    if (source) {
        if (size && size === 'large') {
            if (source.formats.large) {
                image = source.formats.large.url;
            } else {
                image = source.url;
            }
        } else if (size && size === 'medium') {
            if (source.formats.medium) {
                image = source.formats.medium.url;
            } else {
                image = source.url;
            }
        } else if (size && size === 'thumbnail') {
            if (source.formats.thumbnail) {
                image = source.formats.source.url;
            } else {
                image = source.url;
            }
        } else if (size && size === 'small') {
            if (source.formats.small !== undefined) {
                image = source.formats.small.url;
            } else {
                image = source.url;
            }
        } else {
            image = source.url;
        }
        imageURL = `${baseUrl}${image}`;
    } else {
        imageURL = `/static/img/undefined-product-thumbnail.jpg`;
    }
    return imageURL;
}

export default function useProduct() {
    return {
        thumbnailImage: (payload) => {
            if (payload) {
                if (payload.thumbnail) {
                    return (
                        <>
                            <LazyLoad>
                                <img
                                    src={getImageURL(payload.thumbnail)}
                                    alt={getImageURL(payload.thumbnail)}
                                />
                            </LazyLoad>
                        </>
                    );
                }
            }
        },
        price: (payload) => {
            let view;
            if (payload.sale_price) {
                view = (
                    <p className="ps-product__price sale">
                        <span>Rs. </span>
                        {formatCurrency(payload.sale_price)}
                        <del className="ml-2">
                            <span>Rs. </span>
                            {formatCurrency(payload.price)}
                        </del>
                    </p>
                );
            } else {
                view = (
                    <p className="ps-product__price">
                        <span>Rs. </span>
                        {formatCurrency(payload.price)}
                    </p>
                );
            }
            return view;
        },
        badges: (payload) => {
            let view = null;
            if (payload.badges && payload.badges.length > 0) {
                const items = payload.badges.map((item) => {
                    if (item.value === 'hot') {
                        return (
                            <span
                                className="ps-product__badge hot"
                                key={item.id}>
                                Hot
                            </span>
                        );
                    }
                    if (item.value === 'new') {
                        return (
                            <span
                                className="ps-product__badge new"
                                key={item.id}>
                                New
                            </span>
                        );
                    }
                    if (item.value === 'sale') {
                        return (
                            <span
                                className="ps-product__badge sale"
                                key={item.id}>
                                Sale
                            </span>
                        );
                    }
                });
                view = <div className="ps-product__badges">{items}</div>;
            }
            return view;
        },
        badge: (payload) => {
            let view;
            if (payload.badge && payload.badge !== null) {
                view = payload.badge.map((badge) => {
                    if (badge.type === 'sale') {
                        return (
                            <div className="ps-product__badge">
                                {badge.value}
                            </div>
                        );
                    } else if (badge.type === 'outStock') {
                        return (
                            <div className="ps-product__badge out-stock">
                                {badge.value}
                            </div>
                        );
                    } else {
                        return (
                            <div className="ps-product__badge hot">
                                {badge.value}
                            </div>
                        );
                    }
                });
            }
            if (payload.sale_price) {
                const discountPercent = (
                    ((payload.price - payload.sale_price) /
                        payload.sale_price) *
                    100
                ).toFixed(0);
                return (
                    <div className="ps-product__badge">-{discountPercent}%</div>
                );
            }
            return view;
        },
        brand: (payload) => {
            let view;
            if (payload.brands && payload.brands.length > 0) {
                view = (
                    <Link href="/shop">
                        <a className="text-capitalize">
                            {payload.brands[0].name}
                        </a>
                    </Link>
                );
            } else {
                view = (
                    <Link href="/shop">
                        <a className="text-capitalize">No Brand</a>
                    </Link>
                );
            }
            return view;
        },
        title: (payload) => {
            let view = (
                <Link href="/product/[pid]" as={`/product/${payload.id}`}>
                    <a className="ps-product__title">{payload.title}</a>
                </Link>
            );
            return view;
        },
    };
}
