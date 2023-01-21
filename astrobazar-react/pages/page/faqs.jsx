import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FaqsContent from '~/components/partials/page/FaqsContent';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';

const FaqsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Frequently Asked Questions',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="FAQ page">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <FaqsContent />
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default FaqsPage;
