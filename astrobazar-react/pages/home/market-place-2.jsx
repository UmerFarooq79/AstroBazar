import React from 'react';
import Market2ProductGroupByCategory from '~/components/partials/homepage/marketplace2/Market2ProductGroupByCategory';
import MartketPlace2Banner from '~/components/partials/homepage/marketplace2/MartketPlace2Banner';
import MarketPlace2Promotions from '~/components/partials/homepage/marketplace2/MarketPlace2Promotions';
import MarketPlace2Download from '~/components/partials/homepage/marketplace2/MarketPlace2Download';
import MarketPlace2Categories from '~/components/partials/homepage/marketplace2/MarketPlace2Categories';
import HeaderMarketPlace2 from '~/components/shared/headers/HeaderMarketPlace2';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import FooterMarketPlace2 from '~/components/shared/footers/FooterMarketPlace2';
import PageContainer from '~/components/layouts/PageContainer';

const HomeMarketPlace2Page = () => {
    const headers = (
        <>
            <HeaderMarketPlace2 />
            <HeaderMobile />
        </>
    );
    const footer = <FooterMarketPlace2 />;
    return (
        <PageContainer
            header={headers}
            footer={footer}
            title="Home Marketplace 2">
            <main id="homepage-4">
                <MartketPlace2Banner />
                <MarketPlace2Categories />
                <MarketPlace2Promotions />
                <Market2ProductGroupByCategory
                    categorySlug="consumer-electrics"
                    title="Consumer Electronics"
                />
                <Market2ProductGroupByCategory
                    categorySlug="clothing-and-parel"
                    title="Clothings & Apparel"
                />
                <Market2ProductGroupByCategory
                    categorySlug="computers-and-technologies"
                    title="Computer & Technologies"
                />
                <Market2ProductGroupByCategory
                    categorySlug="garden-and-kitchen"
                    title="Garden & Kitchen"
                />
                <Market2ProductGroupByCategory
                    categorySlug="health-and-beauty"
                    title="Heath & beauty"
                />
                <MarketPlace2Download />
            </main>
        </PageContainer>
    );
};

export default HomeMarketPlace2Page;
