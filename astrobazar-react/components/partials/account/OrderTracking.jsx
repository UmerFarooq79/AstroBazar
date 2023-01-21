import React from 'react';

const OrderTracking = () => (
    <div className="ps-order-tracking">
        <div className="container">
            <div className="ps-section__header">
                <h3>Order Tracking</h3>
                <p>
                    To track your order please enter your Order ID in the box below and press the
                    "Track" button. This was given to youon your receipt and in the confirmation
                    email you should have received.
                </p>
            </div>
            <div className="ps-section__content">
                <form className="ps-form--order-tracking" action="/" method="get">
                    <div className="form-group">
                        <label>Order ID</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Found in your order confimation email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Billing Email</label>
                        <input className="form-control" type="text" placeholder="" />
                    </div>
                    <div className="form-group">
                        <button className="ps-btn ps-btn--fullwidth">Track Your Order</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default OrderTracking;
