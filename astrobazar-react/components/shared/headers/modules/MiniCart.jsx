import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ProductOnCart from '~/components/elements/products/ProductOnCart';
import useEcomerce from '~/hooks/useEcomerce';
import { calculateAmount } from '~/utilities/ecomerce-helpers';

const MiniCart = ({ ecomerce }) => {
    const { products, removeItem, removeItems, getProducts } = useEcomerce();

    function handleRemoveItem(e, productId) {
        e.preventDefault();
        removeItem({ id: productId }, ecomerce.cartItems, 'cart');
    }

    useEffect(() => {
        getProducts(ecomerce.cartItems, 'cart');
    }, [ecomerce]);

    let cartItemsView;
    if (products && products.length > 0) {
        const amount = calculateAmount(products);
        const productItems = products.map((item) => {
            return (
                <ProductOnCart product={item} key={item.id}>
                    <a
                        className="ps-product__remove"
                        onClick={(e) => handleRemoveItem(e)}>
                        <i className="icon-cross"></i>
                    </a>
                </ProductOnCart>
            );
        });
        cartItemsView = (
            <div className="ps-cart__content">
                <div className="ps-cart__items">{productItems}</div>
                <div className="ps-cart__footer">
                    <h3>
                        Sub Total:
                        <strong>Rs. {amount ? amount : 0}</strong>
                    </h3>
                    <figure>
                        <Link href="/account/shopping-cart">
                            <a className="ps-btn">View Cart</a>
                        </Link>
                        <Link href="/account/checkout">
                            <a className="ps-btn">Checkout</a>
                        </Link>
                    </figure>
                </div>
            </div>
        );
    } else {
        cartItemsView = (
            <div className="ps-cart__content">
                <div className="ps-cart__items">
                    <span>No products in cart</span>
                </div>
            </div>
        );
    }

    return (
        <div className="ps-cart--mini">
            <a className="header__extra" href="#">
                <i className="icon-bag2"></i>
                <span>
                    <i>{products ? products.length : 0}</i>
                </span>
            </a>
            {cartItemsView}
        </div>
    );
};

export default connect((state) => state)(MiniCart);
