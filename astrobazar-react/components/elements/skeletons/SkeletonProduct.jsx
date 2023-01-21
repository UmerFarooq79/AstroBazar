import React from 'react';
import { Skeleton } from 'antd';

const SkeletonProduct = () => {
    return (
        <div className="ps-skeleton ps-skeleton--product">
            <Skeleton.Input active={true} size={350} style={{height: 160}} />
            <Skeleton paragraph={{ rows: 4, title: true }} />
        </div>
    );
};

export default SkeletonProduct;
