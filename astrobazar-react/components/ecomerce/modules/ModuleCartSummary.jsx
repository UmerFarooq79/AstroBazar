import React from 'react';
import Link from 'next/link';
import { calculateAmount } from '~/utilities/ecomerce-helpers';

const ModuleCartSummary = ({ source }) => {
    // View
    let productItemsView, amount;
    if (source && source.length > 0) {
        amount = calculateAmount(source);
        productItemsView = source.map((item) => (
            <li key={item.id}>
                <span className="ps-block__estimate">
                    <Link href="/product/[pid]" as={`/product/${item.id}`}>
                        <a className="ps-product__title">
                            {item.title}
                            <br /> x {item.quantity}
                        </a>
                    </Link>
                </span>
            </li>
        ));
    }

    return (
        <>
            <div className="ps-block--shopping-total">
                <div className="ps-block__header">
                    <p>
                        Subtotal <span> Rs. {amount}</span>
                    </p>
                </div>
                <div className="ps-block__content">
                    <ul className="ps-block__product">{productItemsView}</ul>
                    <h3>
                        Total <span>Rs. {amount}</span>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default ModuleCartSummary;
