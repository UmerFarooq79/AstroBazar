import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { generateTempArray } from '~/utilities/common-helpers';
import Product from '~/components/elements/products/Product';
import { carouselStandard } from '~/utilities/carousel-helpers';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import useGetProducts from '~/hooks/useGetProducts';

const ProductGroupByCarousel = ({
    collectionSlug,
    title,
    layout = 'standard',
}) => {
    const sliderRef = useRef(null);
    const { productItems, loading, getProductsByCollection } = useGetProducts();

    useEffect(() => {
        getProductsByCollection(collectionSlug);
    }, [collectionSlug]);

    const handleCarouselPrev = (e) => {
        e.preventDefault();
        sliderRef.current.slickPrev();
    };

    const handleCarouselNext = (e) => {
        e.preventDefault();
        sliderRef.current.slickNext();
    };

    useEffect(() => {
        getProductsByCollection(collectionSlug);
    }, [collectionSlug]);

    const carouselFullwidth = {
        dots: false,
        infinite: productItems && productItems.length > 7 ? true : false,
        speed: 750,
        slidesToShow: 7,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        lazyload: true,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false,
                },
            },

            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
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

    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            const slideItems = productItems.map((item) => (
                <Product product={item} key={item.id} />
            ));
            if (layout !== 'standard') {
                productItemsView = (
                    <Slider
                        ref={(slider) => (sliderRef.current = slider)}
                        {...carouselFullwidth}
                        arrows={false}
                        className="ps-carousel outside">
                        {slideItems}
                    </Slider>
                );
            } else {
                productItemsView = (
                    <Slider
                        ref={(slider) => (sliderRef.current = slider)}
                        {...carouselStandard}
                        arrows={false}
                        className="ps-carousel outside">
                        {slideItems}
                    </Slider>
                );
            }
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        const skeletons = generateTempArray(6).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }

    return (
        <div className="ps-block--shop-features">
            <div className="ps-block__header">
                <h3>{title}</h3>
                <div className="ps-block__navigation">
                    <a
                        className="ps-carousel__prev"
                        onClick={(e) => handleCarouselPrev(e)}>
                        <i className="icon-chevron-left"></i>
                    </a>
                    <a
                        className="ps-carousel__next"
                        onClick={(e) => handleCarouselNext(e)}>
                        <i className="icon-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div className="ps-block__content">{productItemsView}</div>
        </div>
    );
};

export default ProductGroupByCarousel;
