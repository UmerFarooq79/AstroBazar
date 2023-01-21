import React, { Component } from 'react';
import { Tabs } from 'antd';
import Link from 'next/link';

const { TabPane } = Tabs;
const MarketPlace3SearchTrending = () => {
    const trendingCategories = [
        {
            imagePath: '/static/img/categories/home-5/1.jpg',
            text: '#television',
        },
        { imagePath: '/static/img/categories/home-5/2.jpg', text: '#camera' },
        { imagePath: '/static/img/categories/home-5/3.jpg', text: '#watch' },
        { imagePath: '/static/img/categories/home-5/4.jpg', text: '#chair' },
        { imagePath: '/static/img/categories/home-5/5.jpg', text: '#sneaker' },
        { imagePath: '/static/img/categories/home-5/6.jpg', text: '#xbox' },
        { imagePath: '/static/img/categories/home-5/7.jpg', text: '#gopro' },
        { imagePath: '/static/img/categories/home-5/8.jpg', text: '#lipstick' },
        { imagePath: '/static/img/categories/home-5/9.jpg', text: '#phone' },
        { imagePath: '/static/img/categories/home-5/10.jpg', text: '#laptop' },
        { imagePath: '/static/img/categories/home-5/11.jpg', text: '#speaker' },
        { imagePath: '/static/img/categories/home-5/12.jpg', text: '#book' },
        { imagePath: '/static/img/categories/home-5/13.jpg', text: '#blender' },
        { imagePath: '/static/img/categories/home-5/14.jpg', text: '#bag' },
        {
            imagePath: '/static/img/categories/home-5/15.jpg',
            text: '#smartphone',
        },
        { imagePath: '/static/img/categories/home-5/16.jpg', text: '#camping' },
    ];
    return (
        <div className="ps-search-trending">
            <div className="container">
                <div className="ps-section__header">
                    <h3>
                        Search Trending<span>Updated at 9:00AM</span>
                    </h3>
                </div>
                <div className="ps-section__content">
                    <div className="ps-block--categories-tabs ps-tab-root">
                        <div className="ps-block__header">
                            <Tabs defaultActiveKey="2">
                                <TabPane
                                    tab={
                                        <div className="ps-block__tab-list">
                                            <a>
                                                <i className="icon-star"></i>
                                                <span>Hot Trending</span>
                                            </a>
                                        </div>
                                    }
                                    key="hottrending">
                                    <div className="ps-block__item">
                                        {trendingCategories.map((category) => (
                                            <Link
                                                href="/shop"
                                                key={category.text}>
                                                <a>
                                                    <img
                                                        src={category.imagePath}
                                                        alt={category.text}
                                                    />
                                                    <span>{category.text}</span>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <div className="ps-block__tab-list">
                                            <a>
                                                <i className="icon-smartphone"></i>
                                                <span>Cell Phones</span>
                                            </a>
                                        </div>
                                    }
                                    key="cellphone">
                                    <span>Cell Phones</span>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <div className="ps-block__tab-list">
                                            <a>
                                                <i className="icon-desktop"></i>
                                                <span>Computers</span>
                                            </a>
                                        </div>
                                    }
                                    key="computer">
                                    <span>Computers</span>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <div className="ps-block__tab-list">
                                            <a>
                                                <i className="icon-lampshade"></i>
                                                <span>Furnitures</span>
                                            </a>
                                        </div>
                                    }
                                    key="furnitures">
                                    <span>furnitures</span>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <div className="ps-block__tab-list">
                                            <a>
                                                <i className="icon-shirt"></i>
                                                <span>T-Shirts</span>
                                            </a>
                                        </div>
                                    }
                                    key="tshirts">
                                    <span>T-Shirts</span>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <div className="ps-block__tab-list">
                                            <a>
                                                <i className="icon-baby-bottle"></i>
                                                <span>Baby & Mom</span>
                                            </a>
                                        </div>
                                    }
                                    key="babyandmom">
                                    <span>Baby & Mom</span>
                                </TabPane>

                                <TabPane
                                    tab={
                                        <div className="ps-block__tab-list">
                                            <a>
                                                <i className="icon-baseball"></i>
                                                <span>Sports</span>
                                            </a>
                                        </div>
                                    }
                                    key="sports">
                                    <span>Sports</span>
                                </TabPane>

                                <TabPane
                                    tab={
                                        <div className="ps-block__tab-list">
                                            <a>
                                                <i className="icon-book2"></i>
                                                <span>Book & Office</span>
                                            </a>
                                        </div>
                                    }
                                    key="bookandoffice">
                                    <span>Book & Office</span>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <div className="ps-block__tab-list">
                                            <a>
                                                <i className="icon-car-siren"></i>
                                                <span>Cars</span>
                                            </a>
                                        </div>
                                    }
                                    key="cars">
                                    <span>Cars</span>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketPlace3SearchTrending;
