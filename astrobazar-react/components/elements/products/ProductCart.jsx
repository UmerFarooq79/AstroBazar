import React from 'react';
import Link from 'next/link';
import useProduct from '~/hooks/useProduct';

const ProductCart = ({ product }) => {
    const { thumbnailImage, title } = useProduct();
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>{thumbnailImage(product)}</a>
                </Link>
            </div>
            <div className="ps-product__content">{title(product)}</div>
        </div>
    );
};

export default ProductCart;
