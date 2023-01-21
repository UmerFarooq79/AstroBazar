import React from 'react';

import { Select, Rate } from 'antd';
import Rating from '../../elements/Rating';

const { Option } = Select;

const StoreList2 = () => (
    <section className="ps-store-list">
        <div className="container">
            <div className="ps-section__header">
                <h3>Store list</h3>
            </div>
            <div className="ps-section__content">
                <div className="ps-section__search row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search vendor..."
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Global Office</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Young Shop</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Robert’s Store</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Go Pro</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default StoreList2;
