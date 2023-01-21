import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import { useRouter } from 'next/router';

const ModuleDetailActionsMobile = ({ ecomerce, product }) => {
    const { addItem } = useEcomerce();
    const Router = useRouter();
    const handleAddItemToCart = (e) => {
        e.preventDefault();
        addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
        Router.push('/account/shopping-cart');
    };

    const handleBuyNow = (e) => {
        e.preventDefault();
        addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
        Router.push('/account/checkout');
    };

    return (
        <div className="ps-product__actions-mobile">
            <a
                className="ps-btn ps-btn--black"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                Add to cart
            </a>
            <a className="ps-btn" href="#" onClick={(e) => handleBuyNow(e)}>
                Buy Now
            </a>
        </div>
    );
};

export default connect((state) => state)(ModuleDetailActionsMobile);
