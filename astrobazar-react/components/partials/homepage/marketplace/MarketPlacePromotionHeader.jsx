import React from 'react';

const MarketPlacePromotionHeader = () => (
    <div
        className="ps-block--promotion-header bg--cover"
        style={{
            backgroundImage: `url(/static/img/promotions/header-promotion.jpg)`,
        }}>
        <div className="container">
            <div className="ps-block__left">
                <h3>20%</h3>
                <figure>
                    <p>Discount</p>
                    <h4>For Books Of March</h4>
                </figure>
            </div>
            <div className="ps-block__center">
                <p>
                    Enter Promotion<span>Sale2019</span>
                </p>
            </div>
            <a className="ps-btn ps-btn--sm" href="#">
                Shop now
            </a>
        </div>
    </div>
);

export default MarketPlacePromotionHeader;
