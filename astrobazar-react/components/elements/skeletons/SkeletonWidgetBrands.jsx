import React from 'react';
import { Skeleton } from 'antd';
import { generateTempArray } from '~/utilities/common-helpers';

const SkeletonWidgetBrands = () => {
    const itemsView = generateTempArray(8).map((item) => (
        <div
            className="ps-skeleton__item d-flex align-content-center justify-content-start mb-20"
            key={item}>
            <Skeleton.Input size={20} className="mr-2" />
            <Skeleton.Input active={true} size={20} style={{ width: 200 }} />
        </div>
    ));
    return <div className="ps-skeleton mb-20">{itemsView}</div>;
};

export default SkeletonWidgetBrands;
