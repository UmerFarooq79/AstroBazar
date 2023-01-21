import React from 'react';
import Slider from 'react-slick';

const AutopartBanner = () => {
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
            <Slider {...carouselSettings}>
                <div className="item">
                    <div
                        className="ps-banner--autopart"
                        style={{
                            backgroundImage:
                                "url('/static/img/bg/blog-detail.jpg')",
                        }}>
                        <img
                            src="/static/img/slider/autopart/1.jpg"
                            alt="martfury"
                        />
                        <div className="ps-banner__content">
                            <h4>Version 2018</h4>
                            <h3>
                                DUNLOP TIRES <br /> FASTER
                            </h3>
                            <p>New version 2018 with many powerful features.</p>
                            <p>
                                <strong>
                                    Faster, Friction better & Cheap Price
                                </strong>
                            </p>
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div
                        className="ps-banner--autopart"
                        style={{
                            backgroundImage: `url(/static/img/bg/blog-detail.jpg)`,
                        }}>
                        <img
                            src="/static/img/slider/autopart/2.jpg"
                            alt="martfury"
                        />
                        <div className="ps-banner__content">
                            <h4>Version 2018</h4>
                            <h3>
                                CASTROL <br /> MOTOR OILS
                            </h3>
                            <p>New version 2018 with many powerful features.</p>
                            <p>
                                <strong>
                                    Faster, Friction better & Cheap Price
                                </strong>
                            </p>
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default AutopartBanner;
