import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import Product from '../../../elements/products/Product';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { carouselStandard } from '../../../../utilities/carousel-helpers';

class RecommendItems extends Component {
    constructor(props) {
        super(props);
    }

    handleCarouselPrev = (e) => {
        e.preventDefault();
        this.slider.slickPrev();
    };

    handleCarouselNext = (e) => {
        e.preventDefault();
        this.slider.slickNext();
    };

    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);

        return (
            <div className="ps-block--shop-features">
                <div className="ps-block__header">
                    <h3>Recommended Items</h3>
                    <div className="ps-block__navigation">
                        <a
                            className="ps-carousel__prev"
                            onClick={this.handleCarouselPrev}>
                            <i className="icon-chevron-left"></i>
                        </a>
                        <a
                            className="ps-carousel__next"
                            onClick={this.handleCarouselNext}>
                            <i className="icon-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="ps-block__content">
                    {products && products.length > 0 ? (
                        <Slider
                            ref={(slider) => (this.slider = slider)}
                            {...carouselStandard}
                            arrows={false}
                            className="ps-carousel">
                            {products.map((product) => (
                                <Product product={product} key={product.id} />
                            ))}
                        </Slider>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        );
    }
}

export default connect((state) => state.collection)(RecommendItems);
