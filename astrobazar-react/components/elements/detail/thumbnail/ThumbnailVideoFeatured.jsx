import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../carousel/NextArrow';
import PrevArrow from '../../../carousel/PrevArrow';
import { Modal } from 'antd';
class ThumbnailVideoFeatured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
            modalVisible: false,
        };
    }
    handleCloseModal = e => {
        e.preventDefault();
        this.setState({
            modalVisible: false,
        });
    };
    handleOpenModal = e => {
        e.preventDefault();
        this.setState({
            modalVisible: true,
        });
    };

    componentDidMount() {
        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }

    render() {
        const gallerySetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };

        return (
            <div className="ps-product__thumbnail" data-vertical="false">
                <figure>
                    <div className="ps-wrapper">
                        <Slider
                            {...gallerySetting}
                            ref={slider => (this.slider1 = slider)}
                            asNavFor={this.state.variantCarousel}
                            className="ps-product__gallery ps-carousel inside">
                            <div className="item">
                                <a href="/static/img/products/detail/fullwidth/1.jpg">
                                    <img
                                        src="/static/img/products/detail/fullwidth/1.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </div>
                            <div className="item">
                                <a href="/static/img/products/detail/fullwidth/2.jpg">
                                    <img
                                        src="/static/img/products/detail/fullwidth/2.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </div>
                            <div className="item">
                                <a href="/static/img/products/detail/fullwidth/23.jpg">
                                    <img
                                        src="/static/img/products/detail/fullwidth/3.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </div>
                            <div className="ps-video">
                                <a
                                    href="https://www.youtube.com/watch?v=ilw-qmqZ5zY"
                                    onClick={e => this.handleOpenModal(e)}>
                                    <img
                                        src="/static/img/products/detail/fullwidth/3.jpg"
                                        alt="martfury"
                                    />
                                </a>
                                <Modal
                                    visible={this.state.modalVisible}
                                    onOk={e => this.handleOpenModal(e)}
                                    onCancel={e => this.handleCloseModal(e)}
                                    width={1024}
                                    footer={null}>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/ilw-qmqZ5zY"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    </div>
                                </Modal>
                            </div>
                        </Slider>
                    </div>
                </figure>
                <Slider
                    asNavFor={this.state.galleryCarousel}
                    ref={slider => (this.slider2 = slider)}
                    swipeToSlide={true}
                    slidesToShow={6}
                    vertical={false}
                    focusOnSelect={true}
                    autoplay={false}
                    infinite={false}
                    rows={1}
                    className="ps-product__variants">
                    <div className="item">
                        <img
                            src="/static/img/products/detail/fullwidth/1.jpg"
                            alt="martfury"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="/static/img/products/detail/fullwidth/2.jpg"
                            alt="martfury"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="/static/img/products/detail/fullwidth/3.jpg"
                            alt="martfury"
                        />
                    </div>
                    <div className="item">
                        <div className="ps-video">
                            <a
                                href="https://www.youtube.com/watch?v=ilw-qmqZ5zY"
                                onClick={e => e.preventDefault()}>
                                <img
                                    src="/static/img/products/detail/fullwidth/3.jpg"
                                    alt="martfury"
                                />
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ThumbnailVideoFeatured;
