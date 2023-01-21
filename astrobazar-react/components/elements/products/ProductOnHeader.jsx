import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import useProduct from '~/hooks/useProduct';
import useEcomerce from '~/hooks/useEcomerce';

const ProductOnHeader = ({ ecomerce, product }) => {
    const { thumbnailImage, price, title } = useProduct();
    const { addItem } = useEcomerce();
    function handleAddItemToCart(e) {
        e.preventDefault();
        addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
    }

    return (
        <div className="ps-product--header-sticky">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>{thumbnailImage(product)}</a>
                </Link>
            </div>
            <div className="ps-product__wrapper">
                <div className="ps-product__content">{title(product)}</div>
                <div className="ps-product__shopping">
                    {price(product)}
                    <a
                        className="ps-btn"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e)}>
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
};

export default connect((state) => state)(ProductOnHeader);
