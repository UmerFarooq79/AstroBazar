import React, { Component } from 'react';
import Slider from 'react-slick';

class ClientSay extends Component {
    constructor(props) {
        super(props);
    }

    handleCarouselPrev = e => {
        e.preventDefault();
        this.slider.slickPrev();
    };

    handleCarouselNext = e => {
        e.preventDefault();
        this.slider.slickNext();
    };

    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };
        return (
            <div className="ps-client-say">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>What client say</h3>
                        <div className="ps-section__nav">
                            <a
                                className="ps-carousel__prev"
                                href="#"
                                onClick={this.handleCarouselPrev}>
                                <i className="icon-chevron-left"></i>
                            </a>
                            <a
                                className="ps-carousel__next"
                                href="#"
                                onClick={this.handleCarouselNext}>
                                <i className="icon-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            ref={slider => (this.slider = slider)}
                            {...carouselSetting}
                            className="ps-carousel outside">
                            <div className="ps-block--testimonial">
                                <div className="ps-block__header">
                                    <img src="/static/img/users/1.jpg" alt="martfury" />
                                </div>
                                <div className="ps-block__content">
                                    <i className="icon-quote-close"></i>
                                    <h4>
                                        Kanye West
                                        <span>Head Chef at BBQ Restaurant</span>
                                    </h4>
                                    <p>
                                        Sed elit quam, iaculis sed semper sit
                                        amet udin vitae nibh. at magna akal
                                        semperFusce commodo molestie
                                        luctus.Lorem ipsum Dolor tusima olatiup.
                                    </p>
                                </div>
                            </div>
                            <div className="ps-block--testimonial">
                                <div className="ps-block__header">
                                    <img src="/static/img/users/2.png" alt="martfury" />
                                </div>
                                <div className="ps-block__content">
                                    <i className="icon-quote-close"></i>
                                    <h4>
                                        Anabella Kleva
                                        <span>Boss at TocoToco</span>
                                    </h4>
                                    <p>
                                        Sed elit quam, iaculis sed semper sit
                                        amet udin vitae nibh. at magna akal
                                        semperFusce commodo molestie
                                        luctus.Lorem ipsum Dolor tusima olatiup.
                                    </p>
                                </div>
                            </div>
                            <div className="ps-block--testimonial">
                                <div className="ps-block__header">
                                    <img src="/static/img/users/3.jpg" alt="martfury" />
                                </div>
                                <div className="ps-block__content">
                                    <i className="icon-quote-close"></i>
                                    <h4>
                                        William Roles
                                        <span>Head Chef at BBQ Restaurant</span>
                                    </h4>
                                    <p>
                                        Sed elit quam, iaculis sed semper sit
                                        amet udin vitae nibh. at magna akal
                                        semperFusce commodo molestie
                                        luctus.Lorem ipsum Dolor tusima olatiup.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientSay;
