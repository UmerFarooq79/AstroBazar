import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { carouselStandard } from '../../../utilities/carousel-helpers';

import Product from '../../../components/elements/products/Product';
class CategoriesRecommendItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let products = [];
        const { collections } = this.props;
        if (collections.length > 0) {
            products = collections.find(
                collection => collection.slug === 'shop-recommend-items'
            ).products;
        }
        return (
            <div className="ps-product-list ps-product-list--2">
                <div className="ps-section__header">
                    <h3>Recommended Items</h3>
                </div>
                <div className="ps-section__content">
                    <Slider {...carouselStandard} className="ps-carousel">
                        {products &&
                            products.length > 0 &&
                            products.map(product => (
                                <Product product={product} key={product.id} />
                            ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(CategoriesRecommendItems);
