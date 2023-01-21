import React from 'react';
import Link from 'next/link';

const OrganicPromotions = () => (
    <div className="ps-home-promotion">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <img src="/static/img/promotions/home-9/1.jpg" alt="martfury" />
                        </a>
                    </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <img src="/static/img/promotions/home-9/2.jpg" alt="martfury" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default OrganicPromotions;
