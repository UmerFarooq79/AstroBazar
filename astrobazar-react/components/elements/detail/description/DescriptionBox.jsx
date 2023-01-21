import React, { Component } from 'react';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

import PartialDescription from './PartialDescription';
import PartialSpecification from './PartialSpecification';
import PartialVendor from './PartialVendor';
import PartialReview from './PartialReview';
import PartialOffer from './PartialOffer';

class DescriptionBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ps-product__box">
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
    }
}

export default DescriptionBox;
