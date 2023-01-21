import React from 'react';

const DownloadApp = () => (
    <section className="ps-download-app">
        <div className="ps-container">
            <div className="ps-block--download-app">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/ads/mobileApp.jpg" alt="martfury" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block__content">
                                <h3>Download ASTRO BAZAR App Now!</h3>
                                <p>
                                    Shopping fastly and easily more with our app. Get a link to
                                    download the app on your phone
                                </p>
                                <form
                                    className="ps-form--download-app"
                                    action="do_action"
                                    method="post">
                                    <div className="form-group--nest">
                                        <input
                                            className="form-control"
                                            type="Email"
                                            placeholder="Email Address"
                                        />
                                        <button className="ps-btn">Subscribe</button>
                                    </div>
                                </form>
                                <p className="download-link">
                                    <a href="#">
                                        <img src="/static/img/google-play.png" alt="martfury" />
                                    </a>
                                    <a href="#">
                                        <img src="/static/img/app-store.png" alt="martfury" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default DownloadApp;
