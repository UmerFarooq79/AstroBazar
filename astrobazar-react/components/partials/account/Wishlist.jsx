import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import ProductCart from '~/components/elements/products/ProductCart';

const Wishlist = ({ ecomerce }) => {
    const { loading, products, getProducts } = useEcomerce();
    const { addItem, removeItem } = useEcomerce();

    function handleAddItemToCart(e, product) {
        e.preventDefault();
        addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
    }

    function handleRemoveWishlistItem(e, product) {
        e.preventDefault();
        removeItem(product, ecomerce.wishlistItems, 'wishlist');
    }

    useEffect(() => {
        if (ecomerce.wishlistItems) {
            getProducts(ecomerce.wishlistItems);
        }
    }, [ecomerce]);

    // views
    let wishlistItemsView;
    if (products && products.length > 0) {
        wishlistItemsView = (
            <div className="table-responsive">
                <table className="table ps-table--whishlist">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product name</th>
                            <th>Unit Price</th>
                            <th>Vendor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <a
                                        href="#"
                                        onClick={(e) =>
                                            handleRemoveWishlistItem(e, product)
                                        }>
                                        <i className="icon-cross"></i>
                                    </a>
                                </td>
                                <td>
                                    <ProductCart product={product} />
                                </td>
                                <td className="price">Rs. {product.price}</td>
                                <td>{product.vendor}</td>
                                <td>
                                    <a
                                        className="ps-btn"
                                        href=""
                                        onClick={(e) =>
                                            handleAddItemToCart(e, product)
                                        }>
                                        Add to cart
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        if (!loading) {
            wishlistItemsView = (
                <div className="alert alert-danger" role="alert">
                    Wishlist is empty!
                </div>
            );
        }
    }
    return (
        <div className="ps-section--shopping ps-whishlist">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Wishlist</h1>
                </div>
                <div className="ps-section__content">{wishlistItemsView}</div>
            </div>
        </div>
    );
};
export default connect((state) => state)(Wishlist);
