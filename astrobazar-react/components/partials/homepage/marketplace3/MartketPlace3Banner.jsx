import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import MenuCategories from '../../../shared/headers/modules/MenuCategories';

class MartketPlace3Banner extends Component {
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
                        <MenuCategories />
                    </div>
                    <div className="ps-section__center">
                        <Slider {...carouselSettings}>
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img src="/static/img/slider/home-5/1.jpg" alt="martfury" />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img src="/static/img/slider/home-5/2.jpg" alt="martfury" />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img src="/static/img/slider/home-5/3.jpg" alt="martfury" />
                                    </a>
                                </Link>
                            </div>
                            <div className="item"></div>
                        </Slider>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/slider/home-5/promotion-6.jpg" alt="martfury" />
                            </a>
                        </Link>
                    </div>
                    <div className="ps-section__right">
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/slider/home-5/promotion-1.jpg" alt="martfury" />
                            </a>
                        </Link>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/slider/home-5/promotion-2.jpg" alt="martfury" />
                            </a>
                        </Link>
                        <Link href="/shop">
                            <a className="wide">
                                <img src="/static/img/slider/home-5/promotion-3.jpg" alt="martfury" />
                            </a>
                        </Link>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/slider/home-5/promotion-4.jpg" alt="martfury" />
                            </a>
                        </Link>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/slider/home-5/promotion-5.jpg" alt="martfury" />
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default MartketPlace3Banner;
