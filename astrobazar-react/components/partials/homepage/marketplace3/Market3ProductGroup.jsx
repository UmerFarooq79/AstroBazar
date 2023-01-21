import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Tabs } from 'antd';
import { getProductsByCategoriesHelper } from '~/utilities/strapi-fetch-data-helpers';
import Product from '~/components/elements/products/Product';
import ProductHorizontal from '~/components/elements/products/ProductHorizontal';
import useGetProducts from '~/hooks/useGetProducts';

const { TabPane } = Tabs;

const Market3ProductGroup = ({ categorySlug, banners, links, heading }) => {
    const { productItems, loading, getProductsByCategory } = useGetProducts();

    useEffect(() => {
        getProductsByCategory(categorySlug);
    }, [categorySlug]);

    // Views
    let productItemsView,
        recommendView,
        tab1View,
        tab2View,
        tab3View,
        linksView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            tab1View = productItems.map((item, index) => {
                if (index < 4) {
                    return (
                        <div className="col-md-3 col-sm-4 col-6" key={item.id}>
                            <Product product={item} key={item.id} />
                        </div>
                    );
                }
            });
            tab2View = productItems.map((item, index) => {
                if (index > 1 && index < 6) {
                    return (
                        <div className="col-md-3 col-sm-4 col-6" key={item.id}>
                            <Product product={item} key={item.id} />
                        </div>
                    );
                }
            });
            tab3View = productItems.map((item, index) => {
                if (index > 0 && index < 5) {
                    return (
                        <div className="col-md-3 col-sm-4 col-6" key={item.id}>
                            <Product product={item} key={item.id} />
                        </div>
                    );
                }
            });
            recommendView = productItems.map((item, index) => {
                if (index > 3 && index < 8) {
                    return <ProductHorizontal product={item} key={item.id} />;
                }
            });
            linksView = links.map((item) => (
                <li key={item}>
                    <Link href="/shop">
                        <a>{item}</a>
                    </Link>
                </li>
            ));
        } else {
        }
    } else {
    }

    return (
        <div className="ps-block--product-box">
            <div className="ps-block__header">
                <h3>
                    <i className={heading.icon}></i> {heading.title}
                </h3>
                <ul>{linksView}</ul>
            </div>
            <div className="ps-block__content">
                <div className="ps-block__left">
                    {banners}
                    <div className="ps-block__products">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="New Arrivals" key="1">
                                <div className="row">{tab1View}</div>
                            </TabPane>
                            <TabPane tab="Best Seller" key="2">
                                <div className="row">{tab2View}</div>
                            </TabPane>
                            <TabPane tab="Sale" key="3">
                                <div className="row">
                                    <div className="row">{tab3View}</div>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="ps-block__right">
                    <figure>
                        <figcaption>Recommended For You</figcaption>
                        {recommendView}
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Market3ProductGroup;
