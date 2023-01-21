import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import {
    getProductsByCategoriesHelper,
    getProductsByCollectionHelper,
} from '~/utilities/strapi-fetch-data-helpers';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import Product from '~/components/elements/products/Product';
import { carouselStandard } from '~/utilities/carousel-helpers';
import useGetProducts from '~/hooks/useGetProducts';

const TechnologyProductGroupWithCarousel = ({
    collectionSlug,
    categorySlug,
    links,
    title,
}) => {
    const {
        productItems,
        loading,
        getProductsByCategory,
        getProductsByCollection,
    } = useGetProducts();

    useEffect(() => {
        if (categorySlug) {
            getProductsByCategory(categorySlug);
        }
        if (collectionSlug) {
            getProductsByCollection(collectionSlug);
        }
    }, [categorySlug, collectionSlug]);

    // Views
    let productItemsView, linksView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            const slideItems = productItems.map((item) => (
                <Product product={item} key={item.id} />
            ));
            productItemsView = (
                <Slider
                    {...carouselStandard}
                    arrows={false}
                    className="ps-carousel outside">
                    {slideItems}
                </Slider>
            );
            linksView = links.map((item) => (
                <li key={item}>
                    <Link href="/shop">
                        <a>Iphone</a>
                    </Link>
                </li>
            ));
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        const skeletons = generateTempArray(6).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }

    return (
        <div className="ps-product-list">
            <div className="container">
                <div className="ps-section__header">
                    <h3>{title}</h3>
                    <ul className="ps-section__links">
                        {linksView}
                        <li>
                            <Link href="/shop">
                                <a>View All</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">{productItemsView}</div>
            </div>
        </div>
    );
};
export default TechnologyProductGroupWithCarousel;
