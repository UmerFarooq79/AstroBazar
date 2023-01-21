import React, { Component } from 'react';
import Slider from 'react-slick';

class OrganicBanner extends Component {
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
                <Slider {...carouselSettings}>
                    <div
                        className="ps-banner--organic"
                        style={{
                            backgroundImage: `url(/static/img/slider/home-9/1.jpg)`,
                        }}>
                        <img src="/static/img/slider/home-9/1.jpg" alt="martfury" />
                        <div className="ps-banner__content">
                            <h4>Weekend Promotions</h4>
                            <h3>
                                Happy Summer <br /> combo super discount <br />{' '}
                                up to
                                <strong>40% Off</strong>
                            </h3>
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div
                        className="ps-banner--organic"
                        style={{
                            backgroundImage: `url(/static/img/slider/home-9/2.jpg)`,
                        }}>
                        <img src="/static/img/slider/home-9/2.jpg" alt="martfury" />
                        <div className="ps-banner__content">
                            <h4>Weekend Promotions</h4>
                            <h3>
                                Fresh vegetables & <br /> fruits basket <br />{' '}
                                up to
                                <strong>40% Off</strong>
                            </h3>
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default OrganicBanner;
