import React from 'react';
import Link from 'next/link';

const MoreCategories = ({ data }) => (
    <div className="ps-product-list ps-product-list--2 ps-more-categories">
        <div className="ps-section__header">
            <h3>Best Seller Items</h3>
            <ul className="ps-section__links">
                <li>
                    <Link href="/shop">
                        <a href="shop-grid.html">Clothing & Apparel</a>
                    </Link>
                </li>
                <li>
                    <a href="shop-grid.html">Garden & Kitchen</a>
                </li>
                <li>
                    <a href="shop-grid.html">Consumer Electrics</a>
                </li>
            </ul>
        </div>
        <div className="ps-section__content">
            {data.map(category => {
                if (category.id < 6) {
                    return (
                        <div className="ps-block--category-vertical" key={category.id}>
                            <div className="ps-block__thumbnail">
                                <img src={category.thumbnail} alt="martfury" />
                            </div>
                            <div className="ps-block__content">
                                <h4>{category.title}</h4>
                                <ul>
                                    {category.links.map(item => (
                                        <li key={item}>
                                            <Link href="/shop">
                                                <a>{item}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#">Shop All</a>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    </div>
);

export default MoreCategories;
