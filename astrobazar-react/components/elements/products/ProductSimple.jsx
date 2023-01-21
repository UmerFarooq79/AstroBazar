import React from 'react';
import Link from 'next/link';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import Rating from '~/components/elements/Rating';
import useProduct from '~/hooks/useProduct';

const ProductSimple = ({ product }) => {
    const { thumbnailImage, price, title, badge } = useProduct();

    return (
        <div className="ps-product ps-product--simple">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>{thumbnailImage(product)}</a>
                </Link>
                {badge(product)}
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    {title(product)}
                    <div className="ps-product__rating">
                        <Rating />
                        <span>{product.ratingCount}</span>
                    </div>
                    {price(product)}
                </div>
            </div>
        </div>
    );
};

export default ProductSimple;
