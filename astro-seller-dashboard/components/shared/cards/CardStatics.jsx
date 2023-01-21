import React from 'react';

const CardStatics = () => (
    <section className="ps-card ps-card--statics">
        <div className="ps-card__header">
            <h4>Statics</h4>
            <div className="ps-card__sortby">
                <i className="icon-calendar-empty"></i>
                <div className="form-group--select">
                    <select className="form-control">
                        <option value="1">Last 30 days</option>
                        <option value="2">Last 90 days</option>
                        <option value="3">Last 180 days</option>
                    </select>
                    <i className="icon-chevron-down"></i>
                </div>
            </div>
        </div>
        <div className="ps-card__content">
            <div className="ps-block--stat yellow">
                <div className="ps-block__left">
                    <span>
                        <i className="icon-cart"></i>
                    </span>
                </div>
                <div className="ps-block__content">
                    <p>Orders</p>
                    <h4>
                        254
                        <small className="asc">
                            <i className="icon-arrow-up"></i>
                            <span>12,5%</span>
                        </small>
                    </h4>
                </div>
            </div>
            <div className="ps-block--stat pink">
                <div className="ps-block__left">
                    <span>
                        <i className="icon-cart"></i>
                    </span>
                </div>
                <div className="ps-block__content">
                    <p>Revenue</p>
                    <h4>
                        Rs. 6,260
                        <small className="asc">
                            <i className="icon-arrow-up"></i>
                            <span>7.1%</span>
                        </small>
                    </h4>
                </div>
            </div>
            <div className="ps-block--stat green">
                <div className="ps-block__left">
                    <span>
                        <i className="icon-cart"></i>
                    </span>
                </div>
                <div className="ps-block__content">
                    <p>Earning</p>
                    <h4>
                        Rs. 2,567
                        <small className="desc">
                            <i className="icon-arrow-down"></i>
                            <span>0.5%</span>
                        </small>
                    </h4>
                </div>
            </div>
        </div>
    </section>
);

export default CardStatics;
