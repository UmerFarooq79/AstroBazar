import React, { Component } from 'react';
import Slider from 'react-slick';

import { relatedProduct } from '../../../public/static/data/product';
import Product from '../../../components/elements/products/Product';

class RelatedProductFullwidth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 7,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
            ],
        };
        const { boxed } = this.props;
        return (
            <div
                className={`ps-section--default ps-related-products ${
                    boxed === true ? 'boxed' : ''
                }`}>
                <div className="ps-section__header">
                    <h3>Related products</h3>
                </div>
                <div className="ps-section__content">
                    <Slider {...carouselSetting} className="ps-carousel">
                        {relatedProduct.map(product => {
                            return (
                                <Product product={product} key={product.id} />
                            );
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default RelatedProductFullwidth;
