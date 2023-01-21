import React from 'react';
import LazyLoad from 'react-lazyload';
import { baseUrl } from '~/repositories/Repository';
import Link from 'next/link';

export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function getColletionBySlug(collections, slug) {
    if (collections.length > 0) {
        const result = collections.find(
            (item) => item.slug === slug.toString()
        );
        if (result !== undefined) {
            return result.products;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function getItemBySlug(banners, slug) {
    if (banners.length > 0) {
        const banner = banners.find((item) => item.slug === slug.toString());
        if (banner !== undefined) {
            return banner;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export function convertSlugsQueryString(payload) {
    let query = '';
    if (payload.length > 0) {
        payload.forEach((item) => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
    }
    return query;
}

export function StrapiProductPriceExpanded(product) {
    let view;
    if (product.is_sale === true) {
        view = (
            <p className="ps-product__price sale">
                Rs.{formatCurrency(product.price)}
                <del className="ml-2">
                    Rs.{formatCurrency(product.sale_price)}
                </del>
                <small>18% off</small>
            </p>
        );
    } else {
        view = (
            <p className="ps-product__price">
                Rs.{formatCurrency(product.price)}
            </p>
        );
    }
    return view;
}

export function StrapiProductThumbnail(product) {
    let view;

    if (product.thumbnail) {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img
                            src={`${baseUrl}${product.thumbnail.url}`}
                            alt={product.title}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    } else {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img src="/static/img/not-found.jpg" alt="martfury" />
                    </LazyLoad>
                </a>
            </Link>
        );
    }

    return view;
}
