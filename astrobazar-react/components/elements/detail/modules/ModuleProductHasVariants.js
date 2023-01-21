import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import Rating from '~/components/elements/Rating';
import ThumbnailHasVariant from '~/components/elements/detail/thumbnail/ThumbnailHasVariant';
import { baseUrl } from '~/repositories/Repository';
import { useRouter } from 'next/router';
import useEcomerce from '~/hooks/useEcomerce';
import { Modal } from 'antd';

const ModuleProductHasVariants = ({ ecomerce, currency, product }) => {
    const Router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [sizeItems, setSizeItems] = useState(null);
    const { addItem } = useEcomerce();

    function handleAddItemToCart(e) {
        e.preventDefault();
        addItem(
            { id: product.id, quantity: quantity },
            ecomerce.cartItems,
            'cart'
        );
    }

    function handleBuynow(e) {
        e.preventDefault();
        addItem(
            { id: product.id, quantity: quantity },
            ecomerce.cartItems,
            'cart'
        );
        setTimeout(function () {
            Router.push('/account/checkout');
        }, 1000);
    }

    const handleAddItemToCompare = (e) => {
        e.preventDefault();
        e.preventDefault();
        addItem({ id: product.id }, ecomerce.compareItems, 'compare');
        const modal = Modal.success({
            centered: true,
            title: 'Success!',
            content: `This product has been added to compare listing!`,
        });
        modal.update;
    };

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        addItem({ id: product.id }, ecomerce.wishlistItems, 'wishlist');
        const modal = Modal.success({
            centered: true,
            title: 'Success!',
            content: `This item has been added to your wishlist`,
        });
        modal.update;
    };

    function handleIncreaseItemQty(e) {
        e.preventDefault();
        setQuantity(quantity + 1);
    }

    function handleDecreaseItemQty(e) {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function handleSelectColor(e, colorId) {
        if (product && product.variants.length > 0) {
            const existVariant = product.variants.find(
                (item) => item.id === colorId
            );

            if (existVariant) {
                const sizeItems = existVariant.sizes;
                setSizeItems(sizeItems);
            }
            setSelectedVariant(existVariant);
        }
    }

    function handleSelectSize(e, sizeId) {
        if (sizeItems && sizeItems) {
            const selectedSizeItem = sizeItems.find(
                (item) => item.id === sizeId
            );
            if (selectedSizeItem) {
                setSelectedSize(selectedSizeItem);
            }
        }
    }

    useEffect(() => {
        setSelectedVariant(product.variants[0]);
    }, [product]);

    let variants, sizeSelectionArea, priceArea, thumbnailArea;
    if (selectedVariant) {
        if (selectedVariant.is_sale) {
            priceArea = (
                <h4 className="ps-product__price sale">
                    <del className="mr-2">
                        {currency ? currency.symbol : '$'}
                        {selectedVariant.sale_price}
                    </del>
                    {currency ? currency.symbol : '$'}
                    {selectedVariant.price}
                </h4>
            );
        } else {
            priceArea = (
                <h4 className="ps-selectedVariant__price">
                    {currency ? currency.symbol : '$'}
                    {selectedVariant.price}
                </h4>
            );
        }
        thumbnailArea = <ThumbnailHasVariant product={selectedVariant} />;
    }

    if (product) {
        if (product.variants.length > 0) {
            let colorSelectionArea = product.variants.map((item) => {
                return (
                    <div
                        className={`ps-variant ps-variant--image ${
                            selectedVariant && selectedVariant.id === item.id
                                ? 'active'
                                : ''
                        }`}
                        key={item.id}
                        onClick={(e) => handleSelectColor(e, item.id)}>
                        <span className="ps-variant__tooltip">{item.name}</span>

                        {item.thumbnail !== null ? (
                            <img
                                src={`${baseUrl}${item.thumbnail.url}`}
                                alt=""
                            />
                        ) : (
                            ''
                        )}
                    </div>
                );
            });
            if (sizeItems !== null) {
                sizeSelectionArea = sizeItems.map((item) => {
                    return (
                        <div
                            className={`ps-variant ps-variant--size ${
                                selectedSize && selectedSize.id === item.id
                                    ? 'active'
                                    : ''
                            }`}
                            key={item.id}
                            onClick={(e) => handleSelectSize(e, item.id)}>
                            <span className="ps-variant__tooltip">
                                {item.name}
                            </span>
                            <span className="ps-variant__size">
                                {item.character}
                            </span>
                        </div>
                    );
                });
            }
            variants = (
                <div className="ps-product__variations">
                    <figure>
                        <figcaption>
                            Color:
                            <strong>
                                {selectedVariant !== null
                                    ? selectedVariant.name
                                    : 'Choose an option'}
                            </strong>
                        </figcaption>
                        {colorSelectionArea}
                    </figure>
                    {selectedVariant !== null}
                    <figure>
                        <figcaption>
                            Size:
                            <strong className="pl-1">
                                {selectedSize !== null
                                    ? selectedSize.name
                                    : 'Choose an option'}
                            </strong>
                        </figcaption>
                        {sizeSelectionArea}
                    </figure>
                </div>
            );
        } else {
            if (product.is_sale) {
                priceArea = (
                    <h4 className="ps-product__price sale">
                        <del className="mr-2">
                            {currency ? currency.symbol : '$'}
                            {product.sale_price}
                        </del>
                        {currency ? currency.symbol : '$'}
                        {product.price}
                    </h4>
                );
            } else {
                priceArea = (
                    <h4 className="ps-product__price">
                        {currency ? currency.symbol : '$'}
                        {product.price}
                    </h4>
                );
            }
        }
    }

    return (
        <div className="ps-product__header">
            {thumbnailArea}
            <div className="ps-product__info">
                <h1>{product.title}</h1>
                <div className="ps-product__meta">
                    <p>
                        Brand:
                        <Link href="/shop">
                            <a className="ml-2 text-capitalize">
                                {product.vendor}
                            </a>
                        </Link>
                    </p>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>(1 review)</span>
                    </div>
                </div>
                {priceArea}
                <ModuleProductDetailDescription product={product} />
                {variants}
                <div className="ps-product__shopping">
                    <figure>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                onClick={(e) => handleIncreaseItemQty(e)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={(e) => handleDecreaseItemQty(e)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e)}>
                        Add to cart
                    </a>
                    <a
                        className="ps-btn"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e)}>
                        Buy Now
                    </a>
                    <div className="ps-product__actions">
                        <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                            <i className="icon-heart"></i>
                        </a>
                        <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
                            <i className="icon-chart-bars"></i>
                        </a>
                    </div>
                </div>
                <ModuleProductDetailSpecification />
                <ModuleProductDetailSharing />
                <div className="ps-product__actions-mobile">
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e)}>
                        Add to cart
                    </a>
                    <a
                        className="ps-btn"
                        href="#"
                        onClick={(e) => handleBuynow(e)}>
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default connect((state) => state)(ModuleProductHasVariants);
