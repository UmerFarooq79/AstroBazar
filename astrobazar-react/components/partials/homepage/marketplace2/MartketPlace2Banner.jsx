import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

const MartketPlace2Banner = () => {
    const carouselSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className="ps-home-banner">
            <div className="container">
                <div className="ps-section__left">
                    <Slider {...carouselSettings} className="ps-carousel">
                        <div className="item">
                            <Link href="/shop">
                                <a>
                                    <img
                                        src="/static/img/slider/home-4/1.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                        </div>

                        <div className="item">
                            <Link href="/shop">
                                <a>
                                    <img
                                        src="/static/img/slider/home-4/2.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                        </div>

                        <div className="item">
                            <Link href="/shop">
                                <a>
                                    <img
                                        src="/static/img/slider/home-4/3.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                        </div>
                    </Slider>
                </div>
                <div className="ps-section__right">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <img
                                src="/static/img/slider/home-4/left.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MartketPlace2Banner;
