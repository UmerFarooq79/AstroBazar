import React from 'react';
import Link from 'next/link';

const OrganicBlog = () => (
    <div className="ps-section--default ps-home-blog">
        <div className="container">
            <div className="ps-section__header">
                <h3>News</h3>
                <ul className="ps-section__links">
                    <li>
                        <Link href="/blog">
                            <a>News</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Review Products</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Tips & Tricks</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Promotions</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Videos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>See All</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                        <div className="ps-post">
                            <div className="ps-post__thumbnail">
                                <a className="ps-post__overlay" href="blog-detail.html"></a>
                                <img src="/static/img/blog/organic/1.jpg" alt="martfury" />
                            </div>
                            <div className="ps-post__content">
                                <a className="ps-post__meta" href="#">
                                    Tips & Tricks
                                </a>
                                <a className="ps-post__title" href="#">
                                    How To Make A Fresh Juice Blended For Your Family?
                                </a>
                                <p>
                                    December 17, 2017 by<a href="#"> drfurion</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                        <div className="ps-post">
                            <div className="ps-post__thumbnail">
                                <div className="ps-post__badge">
                                    <i className="icon-volume-high"></i>
                                </div>
                                <a className="ps-post__overlay" href="blog-detail.html"></a>
                                <img src="/static/img/blog/organic/2.jpg" alt="martfury" />
                            </div>
                            <div className="ps-post__content">
                                <a className="ps-post__meta" href="#">
                                    Review Product
                                </a>
                                <a className="ps-post__title" href="#">
                                    Fresh Eggs From Caroline’s Farm
                                </a>
                                <p>
                                    December 17, 2017 by<a href="#"> drfurion</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                        <div className="ps-post">
                            <div className="ps-post__thumbnail">
                                <div className="ps-post__badge">
                                    <i className="icon-volume-high"></i>
                                </div>
                                <div className="ps-post__badge">
                                    <i className="icon-volume-high"></i>
                                </div>
                                <a className="ps-post__overlay" href="blog-detail.html"></a>
                                <img src="/static/img/blog/organic/3.jpg" alt="martfury" />
                            </div>
                            <div className="ps-post__content">
                                <a className="ps-post__meta" href="#">
                                    News
                                </a>
                                <a className="ps-post__title" href="#">
                                    Discover Fresh Organic Farms In Switzeland Villages
                                </a>
                                <p>
                                    December 17, 2017 by<a href="#"> drfurion</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default OrganicBlog;
