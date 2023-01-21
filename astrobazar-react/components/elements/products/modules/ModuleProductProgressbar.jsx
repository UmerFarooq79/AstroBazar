import React from 'react';

const ModuleProductProgressbar = ({ product }) => {
    return (
        <div
            className="ps-product__progress-bar ps-progress"
            data-value={product.inventory}>
            <div className="ps-progress__value">
                {(product.depot / product.inventory) * 100 < 100 ? (
                    <span
                        style={{
                            width:
                                (product.depot / product.inventory) * 100 + '%',
                        }}></span>
                ) : (
                    <span style={{ width: '100%' }}></span>
                )}
            </div>
            {product.inventory - product.depot >= 0 ? (
                <p>Sold: {product.inventory - product.depot}</p>
            ) : (
                <p>Sold: {product.inventory}</p>
            )}
        </div>
    );
};

export default ModuleProductProgressbar;
