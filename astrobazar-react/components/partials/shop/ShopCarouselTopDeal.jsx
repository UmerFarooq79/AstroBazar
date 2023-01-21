import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '~/components/elements/products/Product';
import ProductHorizontal from '~/components/elements/products/ProductHorizontal';
import useGetProducts from '~/hooks/useGetProducts';

const ShopCarouselTopDeal = ({ collectionSlug }) => {
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
        <div className="ps-block--container-hightlight">
            <div className="ps-section__header">
                <h3>Top Deals Super Hot Today</h3>
            </div>
            <div className="ps-section__content">
                <div className="row">{productItemView}</div>
            </div>
        </div>
    );
};

export default ShopCarouselTopDeal;
