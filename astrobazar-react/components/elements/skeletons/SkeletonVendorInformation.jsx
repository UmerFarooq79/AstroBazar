import React from 'react';
import { Skeleton } from 'antd';

const SkeletonVendorInformation = () => {
    return (
        <div className="ps-skeleton--vendor mb-20">
            <div className="mb-10">
                <Skeleton.Input active={true} size={500} style={{height: 200}} />
            </div>
            <Skeleton active={true} paragraph={{ rows: 10, title: true }} />
        </div>
    );
};

export default SkeletonVendorInformation;
