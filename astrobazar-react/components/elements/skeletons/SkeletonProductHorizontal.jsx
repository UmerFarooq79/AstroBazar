import React from 'react';
import { Skeleton } from 'antd';

const SkeletonProductHorizontal = () => {
    return (
        <div className="ps-skeleton--product mb-20">
            <div className="row">
                <div className="col-md-4">
                    <Skeleton.Image />
                </div>
                <div className="col-md-8">
                    <Skeleton active={true} paragraph={{ rows: 2, title: true }} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonProductHorizontal;
