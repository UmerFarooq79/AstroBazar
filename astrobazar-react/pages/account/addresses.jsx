import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Addresses from '~/components/partials/account/Addresses';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import FooterDefault from '~/components/shared/footers/FooterDefault';

const MyAccountPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Addresses',
        },
    ];
    return (
        <PageContainer footer={<FooterDefault />} title="Address">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Addresses />
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default MyAccountPage;
