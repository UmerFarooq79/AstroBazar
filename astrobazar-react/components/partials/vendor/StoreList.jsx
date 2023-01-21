import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

const StoreList = () => (
    <section className="ps-store-list">
        <div className="container">
            <div className="ps-section__header">
                <h3>Store list</h3>
            </div>
            <div className="ps-section__wrapper">
                <div className="ps-section__left">
                    <aside className="widget widget--vendor">
                        <h3 className="widget-title">Search</h3>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search..."
                        />
                    </aside>
                    <aside className="widget widget--vendor">
                        <h3 className="widget-title">Filter by Category</h3>
                        <div className="form-group">
                            <Select
                                placeholder="Category"
                                style={{ width: '100%' }}>
                                <Option key={1}>Lighting</Option>
                                <Option key={2}>Exterior</Option>
                                <Option key={3}>Custom Grilles</Option>
                                <Option key={4}>Wheels & Tires</Option>
                                <Option key={5}>Performance</Option>
                            </Select>
                        </div>
                    </aside>
                    <aside className="widget widget--vendor">
                        <h3 className="widget-title">Filter by Location</h3>
                        <div className="form-group">
                            <Select
                                placeholder="Choose Location"
                                style={{ width: '100%' }}>
                                <Option key={1}>Chooose Location</Option>
                                <Option key={2}>Exterior</Option>
                                <Option key={3}>Custom Grilles</Option>
                                <Option key={4}>Wheels & Tires</Option>
                                <Option key={5}>Performance</Option>
                            </Select>
                        </div>
                        <div className="form-group">
                            <Select
                                placeholder="Chooose State"
                                style={{ width: '100%' }}>
                                <Option key={1}>Chooose State</Option>
                                <Option key={2}>Exterior</Option>
                                <Option key={3}>Custom Grilles</Option>
                                <Option key={4}>Wheels & Tires</Option>
                                <Option key={5}>Performance</Option>
                            </Select>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search by City"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search by ZIP"
                            />
                        </div>
                    </aside>
                </div>
                <div className="ps-section__right">
                    <section className="ps-store-box">
                        <div className="ps-section__header">
                            <p>Showing 1 -8 of 22 results</p>
                            <Select
                                placeholder="Sort by"
                                style={{ width: '100%', maxWidth: '200px' }}>
                                <Option key="1">
                                    Sort by Newest: old to news
                                </Option>
                                <Option key="2">
                                    Sort by Newest: New to old
                                </Option>
                                <Option key="3">
                                    Sort by average rating: low to hight
                                </Option>
                            </Select>
                        </div>
                        <div className="ps-section__content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <article className="ps-block--store">
                                        <div
                                            className="ps-block__thumbnail bg--cover"
                                            style={{
                                                background: `url('/static/img/vendor/store/1.jpg')`,
                                            }}></div>
                                        <div className="ps-block__content">
                                            <div className="ps-block__author">
                                                <a
                                                    className="ps-block__user"
                                                    href="#">
                                                    <img
                                                        src="/static/img/vendor/store/user/3.jpg"
                                                        alt="martfury"
                                                    />
                                                </a>
                                                <a className="ps-btn" href="#">
                                                    Visit Store
                                                </a>
                                            </div>
                                            <h4>GoPro</h4>
                                            <Rating />
                                            <p>
                                                325 Orchard, Buenos Aires,
                                                Formosa Argentina
                                            </p>
                                            <ul className="ps-block__contact">
                                                <li>
                                                    <i className="icon-envelope"></i>
                                                    <a href="mailto:contact@xhome.com">
                                                        contact@xhome.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="icon-telephone"></i>{' '}
                                                    (+093) 77-637-3300
                                                </li>
                                            </ul>
                                            <div className="ps-block__inquiry">
                                                <a href="#">
                                                    <i className="icon-question-circle"></i>{' '}
                                                    inquiry
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <article className="ps-block--store">
                                        <div
                                            className="ps-block__thumbnail bg--cover"
                                            style={{
                                                background: `url('/static/img/vendor/store/2.jpg')`,
                                            }}></div>
                                        <div className="ps-block__content">
                                            <div className="ps-block__author">
                                                <a
                                                    className="ps-block__user"
                                                    href="#">
                                                    <img
                                                        src="/static/img/vendor/store/user/4.jpg"
                                                        alt="martfury"
                                                    />
                                                </a>
                                                <a className="ps-btn" href="#">
                                                    Visit Store
                                                </a>
                                            </div>
                                            <h4>Robert's Store</h4>
                                            <Rating />
                                            <p>
                                                325 Orchard, Buenos Aires,
                                                Formosa Argentina
                                            </p>
                                            <ul className="ps-block__contact">
                                                <li>
                                                    <i className="icon-envelope"></i>
                                                    <a href="mailto:contact@xhome.com">
                                                        contact@xhome.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="icon-telephone"></i>{' '}
                                                    (+093) 77-637-3300
                                                </li>
                                            </ul>
                                            <div className="ps-block__inquiry">
                                                <a href="#">
                                                    <i className="icon-question-circle"></i>{' '}
                                                    inquiry
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <article className="ps-block--store">
                                        <div
                                            className="ps-block__thumbnail bg--cover"
                                            style={{
                                                background: `url('/static/img/vendor/store/3.jpg')`,
                                            }}></div>
                                        <div className="ps-block__content">
                                            <div className="ps-block__author">
                                                <a
                                                    className="ps-block__user"
                                                    href="#">
                                                    <img
                                                        src="/static/img/vendor/store/user/5.jpg"
                                                        alt="martfury"
                                                    />
                                                </a>
                                                <a className="ps-btn" href="#">
                                                    Visit Store
                                                </a>
                                            </div>
                                            <h4>Youngshop</h4>
                                            <Rating />
                                            <p>
                                                325 Orchard, Buenos Aires,
                                                Formosa Argentina
                                            </p>
                                            <ul className="ps-block__contact">
                                                <li>
                                                    <i className="icon-envelope"></i>
                                                    <a href="mailto:contact@xhome.com">
                                                        contact@xhome.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="icon-telephone"></i>{' '}
                                                    (+093) 77-637-3300
                                                </li>
                                            </ul>
                                            <div className="ps-block__inquiry">
                                                <a href="#">
                                                    <i className="icon-question-circle"></i>{' '}
                                                    inquiry
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <article className="ps-block--store">
                                        <div
                                            className="ps-block__thumbnail bg--cover"
                                            style={{
                                                background: `url('/static/img/vendor/store/1.jpg')`,
                                            }}></div>
                                        <div className="ps-block__content">
                                            <div className="ps-block__author">
                                                <a
                                                    className="ps-block__user"
                                                    href="#">
                                                    <img
                                                        src="/static/img/vendor/store/user/5.jpg"
                                                        alt="martfury"
                                                    />
                                                </a>
                                                <a className="ps-btn" href="#">
                                                    Visit Store
                                                </a>
                                            </div>
                                            <h4>Global Offical</h4>
                                            <Rating />
                                            <p>
                                                325 Orchard, Buenos Aires,
                                                Formosa Argentina
                                            </p>
                                            <ul className="ps-block__contact">
                                                <li>
                                                    <i className="icon-envelope"></i>
                                                    <a href="mailto:contact@xhome.com">
                                                        contact@xhome.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="icon-telephone"></i>{' '}
                                                    (+093) 77-637-3300
                                                </li>
                                            </ul>
                                            <div className="ps-block__inquiry">
                                                <a href="#">
                                                    <i className="icon-question-circle"></i>{' '}
                                                    inquiry
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="ps-pagination">
                                <ul className="pagination">
                                    <li className="active">
                                        <a href="#">1</a>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Next Page
                                            <i className="icon-chevron-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
);

export default StoreList;
