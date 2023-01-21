import React from 'react';
import { Skeleton } from 'antd';

const SkeletonPostGrid = () => {
    return (
        <div className="ps-skeleton--product">
            <Skeleton.Input active={true} size={350} style={{height: 200}} />
            <Skeleton paragraph={{ rows: 4, title: true }} />
        </div>
    );
};

export default SkeletonPostGrid;
