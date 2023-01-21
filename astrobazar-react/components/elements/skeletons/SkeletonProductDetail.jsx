import React from 'react';
import { Skeleton } from 'antd';

const SkeletonProductDetail = () => {
    return (
        <div className="ps-skeleton ps-skeleton-product-detail">
            <div className="row">
                <div className="col-md-5 col-12">
                    <Skeleton.Input active={true} size={600} />
                </div>
                <div className="col-md-7 col-12">
                    <div className="mb-10">
                        <Skeleton.Input
                            active={true}
                            size={30}
                            style={{ width: 500 }}
                        />
                    </div>
                    <Skeleton paragraph={{ rows: 16, title: false }} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonProductDetail;
