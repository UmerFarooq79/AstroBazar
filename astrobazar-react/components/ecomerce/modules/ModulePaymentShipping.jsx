import React from 'react';
import Link from 'next/link';

const ModulePaymentShipping = () => {
    return (
        <>
            <div className="ps-block__panel">
                <figure>
                    <small>Contact</small>
                    <p>test@gmail.com</p>
                    <Link href="/account/checkout">
                        <a>Change</a>
                    </Link>
                </figure>
                <figure>
                    <small>Ship to</small>
                    <p>2015 South Street, Midland, Texas</p>
                    <Link href="/account/checkout">
                        <a>Change</a>
                    </Link>
                </figure>
            </div>
            <h4>Shipping Method</h4>
            <div className="ps-block__panel">
                <figure>
                    <small>International Shipping</small>
                    <strong>Rs. 200</strong>
                </figure>
            </div>
        </>
    );
};

export default ModulePaymentShipping;
