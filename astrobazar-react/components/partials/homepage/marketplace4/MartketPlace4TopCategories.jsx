import React, { Component } from 'react';
import Link from 'next/link';

class MartketPlace4TopCategories extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ps-top-categories">
                <div className="container">
                    <h3>Top categories of the month</h3>
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                            <div className="ps-block--category">
                                <Link href="/shop">
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <img
                                    src="/static/img/categories/1.jpg"
                                    alt="martfury"
                                />

                                <p>Electronics</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                            <div className="ps-block--category">
                                <Link href="/shop">
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <img
                                    src="/static/img/categories/2.jpg"
                                    alt="martfury"
                                />
                                <p>Clothings</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                            <div className="ps-block--category">
                                <Link href="/shop">
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <img
                                    src="/static/img/categories/3.jpg"
                                    alt="martfury"
                                />
                                <p>Computers</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                            <div className="ps-block--category">
                                <Link href="/shop">
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <img
                                    src="/static/img/categories/4.jpg"
                                    alt="martfury"
                                />
                                <p>Home & Kitchen</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                            <div className="ps-block--category">
                                <Link href="/shop">
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <img
                                    src="/static/img/categories/5.jpg"
                                    alt="martfury"
                                />
                                <p>Health & Beauty</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                            <div className="ps-block--category">
                                <Link href="/shop">
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <img
                                    src="/static/img/categories/6.jpg"
                                    alt="martfury"
                                />
                                <p>Health & Beauty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MartketPlace4TopCategories;
