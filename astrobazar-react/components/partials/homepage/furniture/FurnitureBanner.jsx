import React from 'react';
import Slider from 'react-slick';

const FurnitureBanner = () => {
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
                <Slider {...carouselSettings}>
                    <div
                        className="ps-banner--furniture"
                        style={{
                            backgroundImage: `url(/static/img/slider/home-8/1.jpg)`,
                        }}>
                        <img
                            src="/static/img/slider/home-8/1.jpg"
                            alt="martfury"
                        />
                        <div className="ps-banner__content">
                            <h4>Limit Edition</h4>
                            <h3>
                                SCADINAVIA <br /> COLLECTIONS FOR YOUR <br />{' '}
                                BEDROOM JUST <strong> 40%</strong>
                            </h3>
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div
                        className="ps-banner--furniture"
                        style={{
                            backgroundImage: `url(/static/img/slider/home-8/2.jpg)`,
                        }}>
                        <img
                            src="/static/img/slider/home-8/2.jpg"
                            alt="martfury"
                        />
                        <div className="ps-banner__content">
                            <h4>Version 2018</h4>
                            <h3>
                                HAPPY SUMMER <br /> WOODEN FURNTITURE <br />{' '}
                                SALE <strong> $599</strong>
                            </h3>
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default FurnitureBanner;
