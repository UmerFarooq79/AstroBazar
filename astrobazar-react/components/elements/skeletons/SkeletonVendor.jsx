import React from 'react';
import { Skeleton } from 'antd';

const SkeletonVendor = () => {
    return (
        <div className="ps-skeleton--vendor mb-20">
            <div className="mb-10">
                <Skeleton.Input active={true} size={500} style={{height: 200}} />
            </div>
            <Skeleton active={true} paragraph={{ rows: 2, title: true }} />
        </div>
    );
};

export default SkeletonVendor;
