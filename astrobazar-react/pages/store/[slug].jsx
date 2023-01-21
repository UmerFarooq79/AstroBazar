import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreDetail from '~/components/partials/stores/StoreDetail';
import PageContainer from '~/components/layouts/PageContainer';
import Newsletters from '~/components/partials/commons/Newletters';

const StoreDetailPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Store list',
            url: '/stores',
        },
        {
            text: 'Store Detail',
        },
    ];

    return (
        <PageContainer title="Store" boxed={true}>
            <BreadCrumb breacrumb={breadCrumb} />
            <StoreDetail />
            <Newsletters layout="container" />
        </PageContainer>
    );
};

export default StoreDetailPage;
