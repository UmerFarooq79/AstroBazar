import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../../elements/carousel/NextArrow';
import PrevArrow from '../../../../elements/carousel/PrevArrow';

class OrganicThumbnailDealHot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
        };
    }

    componentDidMount() {
        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }

    render() {
        const gallerySetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };

        return (
            <div className="ps-product__thumbnail" data-vertical="true">
                <figure>
                    <div className="ps-wrapper">
                        <Slider
                            {...gallerySetting}
                            ref={slider => (this.slider1 = slider)}
                            asNavFor={this.state.variantCarousel}
                            className="ps-product__gallery ps-carousel inside">
                            <div className="item">
                                <a href="/static/img/products/home-9/a-1.jpg">
                                    <img
                                        src="/static/img/products/home-9/a-1.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </div>
                            <div className="item">
                                <a href="/static/img/products/home-9/a-2.jpg">
                                    <img
                                        src="/static/img/products/home-9/a-2.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </div>
                            <div className="item">
                                <a href="/static/img/products/home-9/a-3.jpg">
                                    <img
                                        src="/static/img/products/home-9/a-3.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </div>
                        </Slider>
                    </div>
                </figure>
                <Slider
                    asNavFor={this.state.galleryCarousel}
                    ref={slider => (this.slider2 = slider)}
                    swipeToSlide={true}
                    slidesToShow={3}
                    vertical={true}
                    focusOnSelect={true}
                    className="ps-product__variants">
                    <div className="item">
                        <img src="/static/img/products/home-9/a-1.jpg" alt="martfury" />
                    </div>
                    <div className="item">
                        <img src="/static/img/products/home-9/a-2.jpg" alt="martfury" />
                    </div>
                    <div className="item">
                        <img src="/static/img/products/home-9/a-3.jpg" alt="martfury" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default OrganicThumbnailDealHot;
