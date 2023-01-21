import React from 'react';
import MyAccount from '~/components/partials/account/MyAccount';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const MyAccountPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'My Account',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="My Account">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <MyAccount />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default MyAccountPage;
