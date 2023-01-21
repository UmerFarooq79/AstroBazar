import React from 'react';
import { Skeleton } from 'antd';

const SkeletonSinglePost = () => {
    return (
        <div className="ps-skeleton--product">
            <Skeleton.Input active={true} size={1920} style={{height: 600}} />
            <div className="container">
                <Skeleton paragraph={{ rows: 10, title: true }} />
                <Skeleton paragraph={{ rows: 10, title: true }} />
            </div>
        </div>
    );
};

export default SkeletonSinglePost;
