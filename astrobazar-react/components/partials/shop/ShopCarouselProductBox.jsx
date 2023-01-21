import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import Product from '../../elements/products/Product';
import { carouselStandard } from '../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../utilities/product-helper';

class ShopCarouselProductBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { collections } = this.props;
        const bestSellerProducts = getColletionBySlug(
            collections,
            'best-seller-products'
        );
        const newArrivals = getColletionBySlug(
            collections,
            'new-arrivals-products'
        );
        return (
            <section className="ps-shop-carousel--product-box">
                <div className="ps-product-list">
                    <div className="ps-section__header">
                        <h3>Best Seller In The Last Months</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselStandard}
                            arrows={false}
                            className="ps-carousel outside">
                            {bestSellerProducts.map(product => (
                                <div className="item" key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="ps-product-list">
                    <div className="ps-section__header">
                        <h3>New Arrivals</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselStandard}
                            arrows={false}
                            className="ps-carousel outside">
                            {newArrivals.map(product => (
                                <div className="item" key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}
export default connect(state => state.collection)(ShopCarouselProductBox);
