import React, { useState } from 'react';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import { Modal } from 'antd';

const ModuleDetailShoppingActionsSidebar = ({ ecomerce, product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useEcomerce();

    function handleAddItemToCart(e) {
        e.preventDefault();
        addItem(
            { id: product.id, quantity: quantity },
            ecomerce.cartItems,
            'cart'
        );
    }

    function handleAddItemToCompare(e) {
        e.preventDefault();
        e.preventDefault();
        addItem({ id: product.id }, ecomerce.compareItems, 'compare');
        const modal = Modal.success({
            centered: true,
            title: 'Success!',
            content: `This product has been added to compare listing!`,
        });
        modal.update;
    }

    function handleAddItemToWishlist(e) {
        e.preventDefault();
        addItem({ id: product.id }, ecomerce.wishlistItems, 'wishlist');
        const modal = Modal.success({
            centered: true,
            title: 'Success!',
            content: `This item has been added to your wishlist`,
        });
        modal.update;
    }

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

    return (
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
                    <i className="icon-heart mr-1"></i>
                    Add to wishlist
                </a>
                <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
                    <i className="icon-chart-bars mr-1"></i>
                    Compare
                </a>
            </div>
        </div>
    );
};

export default connect((state) => state)(ModuleDetailShoppingActionsSidebar);
