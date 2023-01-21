import React from 'react';
import AutopartBanner from '~/components/partials/homepage/autopart/AutopartBanner';
import AutopartCategories from '~/components/partials/homepage/autopart/AutopartCategories';
import AutopartPromotions from '~/components/partials/homepage/autopart/AutopartPromotions';
import AutopartPromotions2 from '~/components/partials/homepage/autopart/AutopartPromotions2';
import AutopartRecommendForYou from '~/components/partials/homepage/autopart/AutopartRecommendForYou';
import ClientSay from '~/components/partials/commons/ClientSay';
import AutopartBestSaleBrand from '~/components/partials/homepage/autopart/AutopartBestSaleBrand';
import ProductGroupDealHot from '~/components/partials/product/ProductGroupDealHot';
import PageContainer from '~/components/layouts/PageContainer';
import SiteFeatures from '~/components/partials/homepage/autopart/SiteFeatures';
import FooterSecond from '~/components/shared/footers/FooterSecond';
import HeaderAutoPart from '~/components/shared/headers/HeaderAutoPart';
import HeaderMobileAutopart from '~/components/shared/headers/HeaderMobileAutopart';

const HomeAutopartPage = () => {
    const headers = (
        <>
            <HeaderAutoPart />
            <HeaderMobileAutopart />
        </>
    );

    return (
        <PageContainer
            header={headers}
            footer={<FooterSecond classes="autopart" />}>
            <main id="homepage-2">
                <AutopartBanner />
                <AutopartCategories />
                <AutopartPromotions />
                <AutopartRecommendForYou collectionSlug="autopart-recommend-products" />
                <ProductGroupDealHot collectionSlug="autopart-recommend-products" />
                <AutopartPromotions2 />
                <AutopartBestSaleBrand />
                <ClientSay />
                <SiteFeatures />
            </main>
        </PageContainer>
    );
};

export default HomeAutopartPage;
