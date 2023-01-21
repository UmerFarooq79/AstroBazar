import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Wishlist from '~/components/partials/account/Wishlist';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';

const WishlistPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Wishlist',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Wishlist">
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Wishlist />
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default WishlistPage;
