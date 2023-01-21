import React from 'react';

const FurniturePromotions = () => (
    <div className="ps-home-promotions">
        <div className="container">
            <div className="ps-section__header">
                <h3>
                    WELCOME TO <span>MARTFURY</span> – CUSTOM FURNITURE
                    <span>SHOPPING STORE ONLINE</span>
                </h3>
                <p>Designer furniture. Locally designed. Globally Crafted.</p>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                    <a className="ps-collection" href="#">
                        <img src="/static/img/promotions/home-8/1.jpg" alt="martfury" />
                    </a>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                    <a className="ps-collection" href="#">
                        <img src="/static/img/promotions/home-8/2.jpg" alt="martfury" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default FurniturePromotions;
