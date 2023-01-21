import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { Rate } from 'antd';
import useEcomerce from '~/hooks/useEcomerce';
import useProduct from '~/hooks/useProduct';

const Compare = ({ ecomerce }) => {
    const { products, getProducts } = useEcomerce();
    const { addItem, removeItem } = useEcomerce();
    const { thumbnailImage } = useProduct();

    function handleAddItemToCart(e, product) {
        e.preventDefault();
        addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
    }

    function handleRemoveCompareItem(e, product) {
        e.preventDefault();
        removeItem(product, ecomerce.compareItems, 'compare');
    }

    useEffect(() => {
        console.log(ecomerce);
        if (ecomerce) {
            getProducts(ecomerce.compareItems);
        }
    }, [ecomerce.compareItems]);

    return (
        <div className="ps-compare ps-section--shopping">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Compare Product</h1>
                </div>
                <div className="ps-section__content">
                    {products && products.length === 0 ? (
                        <div className="alert alert-danger" role="alert">
                            Compare list is empty!
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table ps-table--compare">
                                <tbody>
                                    <tr>
                                        <td className="heading" rowSpan="2">
                                            Product
                                        </td>
                                        {products && products.length > 0 ? (
                                            products.map((product) => (
                                                <td key={product.id}>
                                                    <a
                                                        href="#"
                                                        onClick={(e) =>
                                                            handleRemoveCompareItem(
                                                                e,
                                                                product
                                                            )
                                                        }>
                                                        Remove
                                                    </a>
                                                </td>
                                            ))
                                        ) : (
                                            <td></td>
                                        )}
                                    </tr>
                                    <tr>
                                        {products && products.length > 0 ? (
                                            products.map((product) => (
                                                <td key={product.id}>
                                                    <div className="ps-product--compare">
                                                        <div className="ps-product__thumbnail">
                                                            <Link
                                                                href="/product/[pid]"
                                                                as={`/product/${product.id}`}>
                                                                <a>
                                                                    {thumbnailImage(
                                                                        product
                                                                    )}
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="ps-product__content">
                                                            <Link
                                                                href="/product/[pid]"
                                                                as={`/product/${product.id}`}>
                                                                <a className="ps-product__title">
                                                                    {
                                                                        product.title
                                                                    }
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            ))
                                        ) : (
                                            <td></td>
                                        )}
                                    </tr>
                                    <tr>
                                        <td className="heading">Rating</td>
                                        {products && products.length > 0 ? (
                                            products.map((product) => (
                                                <td key={product.id}>
                                                    <Rate
                                                        disabled
                                                        defaultValue={4}
                                                    />
                                                </td>
                                            ))
                                        ) : (
                                            <td></td>
                                        )}
                                    </tr>
                                    <tr>
                                        <td className="heading">Price</td>
                                        {products && products.length > 0 ? (
                                            products.map((product) => {
                                                if (product.sale === true) {
                                                    return (
                                                        <td key={product.id}>
                                                            <h4 className="price sale">
                                                                Rs. {product.price}
                                                                <del>
                                                                    Rs. 
                                                                    {
                                                                        product.salePrice
                                                                    }
                                                                </del>
                                                            </h4>
                                                        </td>
                                                    );
                                                } else
                                                    return (
                                                        <td key={product.id}>
                                                            <h4 className="price">
                                                                Rs. {' '}
                                                                {product.price}
                                                            </h4>
                                                        </td>
                                                    );
                                            })
                                        ) : (
                                            <td></td>
                                        )}
                                    </tr>
                                    <tr>
                                        <td className="heading">Sold By</td>
                                        {products && products.length > 0 ? (
                                            products.map((product) => (
                                                <td key={product.id}>
                                                    <Link href="/vendor/store-list">
                                                        <a>{product.vendor}</a>
                                                    </Link>
                                                </td>
                                            ))
                                        ) : (
                                            <td></td>
                                        )}
                                    </tr>
                                    <tr>
                                        <td className="heading"></td>
                                        {products && products.length > 0 ? (
                                            products.map((product) => (
                                                <td key={product.id}>
                                                    <button
                                                        className="ps-btn"
                                                        onClick={(e) =>
                                                            handleAddItemToCart(
                                                                e,
                                                                product
                                                            )
                                                        }>
                                                        Add To Cart
                                                    </button>
                                                </td>
                                            ))
                                        ) : (
                                            <td></td>
                                        )}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default connect((state) => state)(Compare);
