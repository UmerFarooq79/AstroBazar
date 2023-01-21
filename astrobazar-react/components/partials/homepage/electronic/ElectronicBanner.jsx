import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

class ElectronicBanner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSettings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <section className="ps-home-banner">
                <div className="container">
                    <div className="ps-section__left">
                        <Slider {...carouselSettings}>
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img src="/static/img/slider/home-7/1.jpg" alt="martfury" />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img src="/static/img/slider/home-7/2.jpg" alt="martfury" />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img src="/static/img/slider/home-7/3.jpg" alt="martfury" />
                                    </a>
                                </Link>
                            </div>
                        </Slider>
                    </div>
                    <div className="ps-section__right">
                        <Link href="/shop">
                            <a className="ps-collection">
                                <img src="/static/img/slider/home-7/promotion-1.jpg" alt="martfury" />
                            </a>
                        </Link>
                        <Link href="/shop">
                            <a className="ps-collection">
                                <img src="/static/img/slider/home-7/promotion-2.jpg" alt="martfury" />
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default ElectronicBanner;
