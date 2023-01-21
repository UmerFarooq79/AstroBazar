import React from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';


const ShopBanner =()=>  {
    const carouselSetting = {
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
        <div className="ps-shop-banner">
            <Slider {...carouselSetting} fade={true} className="ps-carousel">
                <img src="/static/img/slider/shop-default/1.jpg" alt="martfury" />
                <img src="/static/img/slider/shop-default/2.jpg" alt="martfury" />
            </Slider>
        </div>
    );
}

export default ShopBanner;
