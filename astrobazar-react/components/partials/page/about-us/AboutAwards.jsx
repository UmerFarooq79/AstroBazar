import React, { Component } from 'react';

import Slider from 'react-slick';
import Link from 'next/link';

class AboutAwards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 100,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };
        return (
            <div className="ps-about-awards">
                <div className="container">
                    <div className="ps-section__header">
                        <h4>Awards & Recognition</h4>
                        <p>
                            Industry leaders and influencers recognize Overstock
                            as one of the most trust worthy retail companies in
                            the U.S., ranking high for both customer and
                            employee satisfaction.
                        </p>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselSetting} className="ps-carousel">
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/1.png"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/2.png"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/3.png"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/4.png"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/5.png"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutAwards;
