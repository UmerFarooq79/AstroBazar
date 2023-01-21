import React from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

const MarketPlaceHomeBanner = () => {
    const carouselSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className="ps-home-banner">
            <Slider {...carouselSettings} className="ps-carousel">
                <div
                    className="ps-banner--market-1"
                    style={{
                        backgroundImage: `url(/static/img/slider/home-3/home-banner/1.jpg)`,
                    }}>
                    <img
                        src="/static/img/slider/home-3/home-banner/1.jpg"
                        alt="martfury"
                    />
                    <div className="ps-banner__content">
                        <h5>Mega Sale Nov 2019</h5>
                        <h3>
                            Double Combo With <br /> The Body Shop
                        </h3>
                        <p>
                            Sale up to <strong>50% Off </strong>
                        </p>
                        <a className="ps-btn" href="#">
                            Shop Now
                        </a>
                    </div>
                </div>
                <div
                    className="ps-banner--market-1"
                    style={{
                        backgroundImage: `url(/static/img/slider/home-3/home-banner/2.jpg)`,
                    }}>
                    <img
                        src="/static/img/slider/home-3/home-banner/2.jpg"
                        alt="martfury"
                    />
                    <div className="ps-banner__content">
                        <h5>Mega Sale Nov 2017</h5>
                        <h3>
                            IKEA Minimalist <br /> Otoman
                        </h3>
                        <p>
                            Discount <strong>50% Off </strong>
                        </p>
                        <a className="ps-btn" href="#">
                            Shop Now
                        </a>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default MarketPlaceHomeBanner;
