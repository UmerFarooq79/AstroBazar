import React from 'react';
import Rating from '~/components/elements/Rating';

const newProducts = ({ thumbnail, title, price }) => {
    return (
        <>
            <div className="ps-product--horizontal">
                <div className="ps-product__thumbnail">
                    <img src={thumbnail} alt={title} />
                </div>

                <div className="ps-product__content">
                    {title}
                    <div className="ps-product__rating">
                        <Rating />
                    </div>
                    {price}
                </div>
            </div>
        </>
    );
};

export default newProducts;
