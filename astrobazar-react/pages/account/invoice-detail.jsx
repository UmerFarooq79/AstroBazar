import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import InvoiceDetail from '~/components/partials/account/InvoiceDetail';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';

const InvoiceDetailPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Invoice Detail',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Invoice detail">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <InvoiceDetail />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default InvoiceDetailPage;
