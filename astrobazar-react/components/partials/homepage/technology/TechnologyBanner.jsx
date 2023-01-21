import React from 'react';
import Slider from 'react-slick';

const TechnologyBanner = () => {
    const carouselSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="ps-home-banner">
            <Slider {...carouselSettings}>
                <div
                    className="ps-banner--technology"
                    style={{
                        backgroundImage:
                            "url('/static/img/slider/home-10/1.jpg')",
                    }}>
                    <img
                        src="/static/img/slider/home-10/1.jpg"
                        alt="martfury"
                    />
                    <div className="ps-banner__content">
                        <h4>Weekend Promotions</h4>
                        <h3>
                            Mini Helicopter <br /> Mini Helicopter <br /> sale
                            <strong> 40% Off</strong>
                        </h3>
                        <a className="ps-btn" href="#">
                            Shop Now
                        </a>
                    </div>
                </div>
                <div
                    className="ps-banner--technology"
                    style={{
                        backgroundImage:
                            "url('/static/img/slider/home-10/2.jpg')",
                    }}>
                    <img
                        src="/static/img/slider/home-10/2.jpg"
                        alt="martfury"
                    />
                    <div className="ps-banner__content">
                        <h4>Weekend Promotions</h4>
                        <h3>
                            iLuv Aud Mini & <br /> Ultra Slim Pocket-Sized{' '}
                            <br /> speaker just
                            <strong> 40% Off</strong>
                        </h3>
                        <a className="ps-btn" href="#">
                            Shop Now
                        </a>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default TechnologyBanner;
