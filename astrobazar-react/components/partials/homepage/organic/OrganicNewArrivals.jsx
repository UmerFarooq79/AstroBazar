import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import Product from '~/components/elements/products/Product';
import useGetProducts from '~/hooks/useGetProducts';

const OrganicNewArrivals = ({ collectionSlug }) => {
    const { productItems, loading, getProductsByCollection } = useGetProducts();

    useEffect(() => {
        getProductsByCollection(collectionSlug);
    }, [collectionSlug]);

    // Views
    let productItemView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemView = productItems.map((item) => (
                <div
                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 "
                    key={item.id}>
                    <Product product={item} />
                </div>
            ));
        } else {
            productItemView = <p>No product found.</p>;
        }
    } else {
        productItemView = <p>Loading...</p>;
    }

    return (
        <div className="ps-product-list ps-product-list--2">
            <div className="container">
                <div className="ps-section__header">
                    <h3>New Arrivals</h3>
                    <ul className="ps-section__links">
                        <li>
                            <Link href="/shop">
                                <a>Milks & Creams</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Fruits</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Vegetables</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Ocean Foods</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Fresh Meats</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>View All</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">
                    <div className="row">{productItemView}</div>
                </div>
            </div>
        </div>
    );
};

export default OrganicNewArrivals;
