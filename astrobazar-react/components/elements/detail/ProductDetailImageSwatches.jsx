import React, { Component } from 'react';

import Slider from 'react-slick';
import Rating from '~/components/elements/Rating';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';

class ProductDetailImageSwatches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
            currentId: 1,
            price: null,
        };
    }

    handleSwitchVariant = (variantId) => {
        this.setState({ currentId: variantId });
        imageSwatcher.variants.map((variant) => {
            if (parseInt(variant.id) === this.state.currentId) {
                this.setState({ price: variant.price });
            }
        });
    };

    componentDidMount() {
        imageSwatcher.variants.map((variant) => {
            if (parseInt(variant.id) === this.state.currentId) {
                this.setState({ price: variant.price });
            }
        });

        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }

    render() {
        const gallerySetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const product = imageSwatcher;
        return (
            <div className="ps-product--detail ps-product--fullwidth">
                <div className="ps-product__header">
                    <div className="ps-product__thumbnail" data-vertical="true">
                        <figure>
                            <div className="ps-wrapper">
                                {product.variants.map((variant) => {
                                    if (variant.id == this.state.currentId) {
                                        return (
                                            <Slider
                                                {...gallerySetting}
                                                key={variant.id}
                                                ref={(slider) =>
                                                    (this.slider1 = slider)
                                                }
                                                asNavFor={
                                                    this.state.variantCarousel
                                                }
                                                className="ps-product__gallery ps-carousel">
                                                {variant.thumbnail.map(
                                                    (item) => (
                                                        <div
                                                            className="item"
                                                            key={item.id}>
                                                            <a
                                                                href={
                                                                    item.image
                                                                }>
                                                                <img
                                                                    src={
                                                                        item.image
                                                                    }
                                                                    alt="martfury"
                                                                />
                                                            </a>
                                                        </div>
                                                    )
                                                )}
                                            </Slider>
                                        );
                                    }
                                })}
                            </div>
                        </figure>
                        {product.variants.map((variant) => {
                            if (variant.id == this.state.currentId) {
                                return (
                                    <Slider
                                        key={variant.id}
                                        asNavFor={this.state.galleryCarousel}
                                        ref={(slider) =>
                                            (this.slider2 = slider)
                                        }
                                        swipeToSlide={true}
                                        slidesToShow={2}
                                        vertical={true}
                                        focusOnSelect={true}
                                        className="ps-product__variants">
                                        {variant.thumbnail.map((item) => (
                                            <div className="item" key={item.id}>
                                                <img
                                                    src={item.image}
                                                    alt="martfury"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                );
                            }
                        })}
                    </div>
                    <div className="ps-product__info">
                        <h1>Sleeve Linen Blend Caro Pane Shirt</h1>
                        <div className="ps-product__meta">
                            <p>
                                Brand:<a href="shop-default.html">Adidas</a>
                            </p>
                            <div className="ps-product__rating">
                                <Rating />
                                <span>(1 review)</span>
                            </div>
                        </div>
                        <h4 className="ps-product__price">${product.price}</h4>
                        <div className="ps-product__desc">
                            <p>
                                Sold By:
                                <a href="shop-default.html">
                                    <strong> Global Store</strong>
                                </a>
                            </p>
                            <ul className="ps-list--dot">
                                <li>
                                    Unrestrained and portable active stereo
                                    speaker
                                </li>
                                <li>
                                    Free from the confines of wires and chords
                                </li>
                                <li> 20 hours of portable capabilities</li>
                                <li>
                                    Double-ended Coil Cord with 3.5mm Stereo
                                    Plugs Included
                                </li>
                                <li>
                                    3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X
                                </li>
                            </ul>
                        </div>
                        <div className="ps-product__variations">
                            <figure>
                                <figcaption>
                                    Color: <strong> Choose an option</strong>
                                </figcaption>
                                {product.variants.map((variant) => {
                                    return (
                                        <div
                                            className="ps-variant ps-variant--image"
                                            key={variant.id}
                                            onClick={(e) =>
                                                this.handleSwitchVariant(
                                                    variant.id
                                                )
                                            }>
                                            <span className="ps-variant__tooltip">
                                                {variant.title}
                                            </span>
                                            <img
                                                src={variant.image}
                                                alt="martfury"
                                            />
                                        </div>
                                    );
                                })}
                            </figure>
                            <figure>
                                <figcaption>
                                    Size <strong> Choose an option</strong>
                                </figcaption>
                                <div className="ps-variant ps-variant--size">
                                    <span className="ps-variant__tooltip">
                                        S
                                    </span>
                                    <span className="ps-variant__size">S</span>
                                </div>
                                <div className="ps-variant ps-variant--size">
                                    <span className="ps-variant__tooltip">
                                        {' '}
                                        M
                                    </span>
                                    <span className="ps-variant__size">M</span>
                                </div>
                                <div className="ps-variant ps-variant--size">
                                    <span className="ps-variant__tooltip">
                                        {' '}
                                        L
                                    </span>
                                    <span className="ps-variant__size">L</span>
                                </div>
                            </figure>
                        </div>
                        <div className="ps-product__shopping">
                            <figure>
                                <figcaption>Quantity</figcaption>
                                <div className="form-group--number">
                                    <button className="up">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                    <button className="down">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="1"
                                    />
                                </div>
                            </figure>
                            <a className="ps-btn ps-btn--black" href="#">
                                Add to cart
                            </a>
                            <a className="ps-btn" href="#">
                                Buy Now
                            </a>
                            <div className="ps-product__actions">
                                <a href="#">
                                    <i className="icon-heart"></i>
                                </a>
                                <a href="#">
                                    <i className="icon-chart-bars"></i>
                                </a>
                            </div>
                        </div>
                        <div className="ps-product__specification">
                            <a className="report" href="#">
                                Report Abuse
                            </a>
                            <p>
                                <strong>SKU:</strong> SF1133569600-1
                            </p>
                            <p className="categories">
                                <strong> Categories:</strong>
                                <a href="#">Consumer Electronics</a>,
                                <a href="#"> Refrigerator</a>,
                                <a href="#">Babies & Moms</a>
                            </p>
                            <p className="tags">
                                <strong> Tags</strong>
                                <a href="#">sofa</a>,
                                <a href="#">technologies</a>,
                                <a href="#">wireless</a>
                            </p>
                        </div>
                        <div className="ps-product__sharing">
                            <a className="facebook" href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="twitter" href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="google" href="#">
                                <i className="fa fa-google-plus"></i>
                            </a>
                            <a className="linkedin" href="#">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a className="instagram" href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <DefaultDescription />
            </div>
        );
    }
}

export default ProductDetailImageSwatches;
