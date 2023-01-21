import React from 'react';
import Link from 'next/link';

import shop_data from '~/public/static/data/shopCategories';

const ShopCategories = () => (
    <div className="ps-shop-categories">
        <div className="row align-content-lg-stretch">
            {shop_data.categories.map((category) => (
                <div
                    className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 "
                    key={category.id}>
                    <div className="ps-block--category-2" data-mh="categories">
                        <div className="ps-block__thumbnail">
                            <img src={category.thumbnail} alt="martfury" />
                        </div>
                        <div className="ps-block__content">
                            <h4>{category.title}</h4>
                            <ul>
                                {category.links &&
                                    category.links.map((link) => (
                                        <li key={link}>
                                            <Link href="/shop" as={`/shop`}>
                                                <a>{link}</a>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ShopCategories;
