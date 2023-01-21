import React from 'react';

const VendorAbout = () => (
    <div className="ps-section--vendor ps-vendor-about">
        <div className="container">
            <div className="ps-section__header">
                <p>WHY SELL ON MARTFURY</p>
                <h4>
                    Join a marketplace where nearly 50 million buyers around <br /> the world shop
                    for unique items
                </h4>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/icons/vendor-1.png" alt="martfury" />
                            </div>
                            <div className="ps-block__content">
                                <h4>Low Fees</h4>
                                <div className="ps-block__desc" data-mh="about-desc">
                                    <p>
                                        It doesn’t take much to list your items and once you make a
                                        sale, Martfury’s transaction fee is just 2.5%.
                                    </p>
                                </div>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/icons/vendor-2.png" alt="martfury" />
                            </div>
                            <div className="ps-block__content">
                                <h4>Powerful Tools</h4>
                                <div className="ps-block__desc" data-mh="about-desc">
                                    <p>
                                        Our tools and services make it easy to manage, promote and
                                        grow your business.
                                    </p>
                                </div>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/icons/vendor-3.png" alt="martfury" />
                            </div>
                            <div className="ps-block__content">
                                <h4>Support 24/7</h4>
                                <div className="ps-block__desc" data-mh="about-desc">
                                    <p>
                                        Our tools and services make it easy to manage, promote and
                                        grow your business.
                                    </p>
                                </div>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default VendorAbout;
