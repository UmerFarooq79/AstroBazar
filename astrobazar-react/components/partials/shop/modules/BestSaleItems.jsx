import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { generateTempArray } from '~/utilities/common-helpers';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import Product from '~/components/elements/products/Product';
import { carouselStandard } from '~/utilities/carousel-helpers';

const BestSaleItems = ({ collectionSlug }) => {
    const sliderRef = useRef(null);
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            collectionSlug,
        );
        if (responseData) {
            setProductItems(responseData.items);
            setTimeout(
                function() {
                    setLoading(false);
                }.bind(this),
                250,
            );
        }
    }

    const handleCarouselPrev = (e) => {
        e.preventDefault();
        sliderRef.current.slickPrev();
    };

    const handleCarouselNext = (e) => {
        e.preventDefault();
        sliderRef.current.slickNext();
    };

    useEffect(() => {
        getProducts();
    }, []);

    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            const slideItems = productItems.map((item) => (
                <Product product={item} key={item.id} />
            ));
            productItemsView = (
                <Slider
                    ref={slider => sliderRef.current = slider}
                    {...carouselStandard}
                    arrows={false}
                    className="ps-carousel outside">
                    {slideItems}
                </Slider>
            );
        } else {
            productItemsView = <p>No product(s) found.</p>;
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
                <h3>Best Sale Items</h3>
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
            <div className="ps-block__content">
                {productItemsView}
            </div>
        </div>
    );
};

export default BestSaleItems;
