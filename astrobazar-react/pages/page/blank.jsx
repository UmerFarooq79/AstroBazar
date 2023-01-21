import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import BlankContent from '~/components/partials/page/Blank';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';

const BlankPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Blank Page',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Blank page">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <BlankContent />
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default BlankPage;
