import React from 'react';
import OrderTracking from '~/components/partials/account/OrderTracking';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const OrderTrackingPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Order Tracking',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Order Tracking">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <OrderTracking />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default OrderTrackingPage;
