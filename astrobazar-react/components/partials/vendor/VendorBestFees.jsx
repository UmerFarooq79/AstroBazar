import React from 'react';

const VendorBestFrees = () => (
    <div className="ps-section--vendor ps-vendor-best-fees">
        <div className="container">
            <div className="ps-section__header">
                <p>BEST FEES TO START</p>
                <h4>Affordable, transparent, and secure</h4>
            </div>
            <div className="ps-section__content">
                <h5>
                    It doesn’t cost a thing to list up to 50 items a month, and you only pay after
                    your stuff sells. It’s just a small percent of the money you earn
                </h5>
                <div className="ps-section__numbers">
                    <figure>
                        <h3>$0</h3>
                        <span>List Fee</span>
                    </figure>
                    <figure>
                        <h3>5%</h3>
                        <span>Final Value Fee</span>
                    </figure>
                </div>
                <div className="ps-section__desc">
                    <figure>
                        <figcaption>Here's what you get for your fee:</figcaption>
                        <ul>
                            <li>A worldwide community of more than 160 million shoppers.</li>
                            <li>
                                Shipping labels you can print at home, with big discounts on
                                postage.
                            </li>
                            <li>
                                Seller protection and customer support to help you sell your stuff.
                            </li>
                        </ul>
                    </figure>
                </div>
                <div className="ps-section__highlight">
                    <img src="/static/img/icons/vendor-4.png" alt="martfury" />
                    <figure>
                        <p>
                            We process payments with PayPal, an external payments platform that
                            allows you to process transactions with a variety of payment methods.
                            Funds from PayPal sales on Martfury will be deposited into your PayPal
                            account.
                        </p>
                    </figure>
                </div>
                <div className="ps-section__footer">
                    <p>
                        Listing fees are billed for 0.20 USD, so if your bank’s currency is not USD,
                        the amount in your currency may vary based on changes in the exchange rate.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default VendorBestFrees;
