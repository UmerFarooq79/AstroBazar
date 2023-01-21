import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import ProductSimple from '~/components/elements/products/ProductSimple';
import { carouselSingle } from '~/utilities/carousel-helpers';
import useGetProducts from '~/hooks/useGetProducts';

const MarketConsumerElectronics = ({ collectionSlug }) => {
    const { productItems, loading, getProductsByCollection } = useGetProducts();

    useEffect(() => {
        getProductsByCollection(collectionSlug);
    }, [collectionSlug]);

    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemsView = productItems.map((item, index) => {
                if (index < 6) {
                    return <ProductSimple product={item} key={item.id} />;
                }
            });
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        productItemsView = <p>Loading...</p>;
    }
    return (
        <div className="ps-block--products-of-category">
            <div className="ps-block__categories">
                <h3>Consumer Electronics</h3>
                <ul>
                    <li>
                        <Link href="/shop" as="/shop/best-seller">
                            <a>Best Seller</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" as="/shop/new-arrivals">
                            <a>New Arrivals</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" as="/shop/tv-television">
                            <a>TV Television</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" as="/shop/air-conditions">
                            <a>Air Condition</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" as="/shop/washing-machine">
                            <a>Washing Machine</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" as="/shop/microware">
                            <a>Microwave</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" as="/shop/refrigerator">
                            <a>Refrigerator</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" as="/shop/office-electronic">
                            <a>Office Electronic</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" as="/shop/car-electronic">
                            <a>Car Electronic</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" as="/shop/sale-and-deal">
                            <a>Sales & Deals</a>
                        </Link>
                    </li>
                </ul>
                <Link href="/shop">
                    <a className="ps-block__more-link">View All</a>
                </Link>
            </div>
            <div className="ps-block__slider">
                <Slider {...carouselSingle} className="ps-carousel">
                    <a>
                        <img
                            src="/static/img/slider/home-3/electronic-1.jpg"
                            alt="martfury"
                        />
                    </a>
                    <a>
                        <img
                            src="/static/img/slider/home-3/electronic-2.jpg"
                            alt="martfury"
                        />
                    </a>
                    <a>
                        <img
                            src="/static/img/slider/home-3/electronic-3.jpg"
                            alt="martfury"
                        />
                    </a>
                </Slider>
            </div>
            <div className="ps-block__product-box">{productItemsView}</div>
        </div>
    );
};
export default connect((state) => state.collection)(MarketConsumerElectronics);
