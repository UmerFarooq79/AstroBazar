import React from 'react';

import { Tabs } from 'antd';
import PartialDescription from '~/components/elements/detail/description/PartialDescription';
import PartialSpecification from '~/components/elements/detail/description/PartialSpecification';
import PartialVendor from '~/components/elements/detail/description/PartialVendor';
import PartialReview from '~/components/elements/detail/description/PartialReview';
import PartialOffer from '~/components/elements/detail/description/PartialOffer';

const { TabPane } = Tabs;

const DefaultDescription = () => {
    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Description" key="1">
                    <PartialDescription />
                </TabPane>
                <TabPane tab="Specification" key="2">
                    <PartialSpecification />
                </TabPane>
                <TabPane tab="Vendor" key="3">
                    <PartialVendor />
                </TabPane>
                <TabPane tab="Reviews (1)" key="4">
                    <PartialReview />
                </TabPane>
                <TabPane tab="Questions and Answers" key="5">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="More Offers" key="6">
                    <PartialOffer />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default DefaultDescription;
