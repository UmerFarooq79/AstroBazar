import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import RecentViewedProducts from '~/components/partials/account/RecentViewedProducts';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const RecentViewedProductsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Recent Viewed Products',
        },
    ];
    return (
        <>
            <PageContainer
                footer={<FooterDefault />}
                title="Recent Viewed Products">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <RecentViewedProducts />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default RecentViewedProductsPage;
