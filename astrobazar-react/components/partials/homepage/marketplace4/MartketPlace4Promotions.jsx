import React from 'react';
import Link from 'next/link';

const MartketPlace4Promotions = () => (
    <div className="ps-promotions">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <img src="/static/img/promotions/home-6/1.jpg" alt="martfury" />
                        </a>
                    </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <img src="/static/img/promotions/home-6/2.jpg" alt="martfury" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default MartketPlace4Promotions;
