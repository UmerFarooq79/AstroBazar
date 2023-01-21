import React from 'react';
import MartketPlace4Banner from '~/components/partials/homepage/marketplace4/MartketPlace4Banner';
import MartketPlace4SiteFeatures from '~/components/partials/homepage/marketplace4/MartketPlace4SiteFeatures';
import MartketPlace4Promotions from '~/components/partials/homepage/marketplace4/MartketPlace4Promotions';
import MartketPlace4TopCategories from '~/components/partials/homepage/marketplace4/MartketPlace4TopCategories';
import CategoriesBoxConsumerElectronics from '~/components/partials/homepage/marketplace4/modules/CategoriesBoxConsumerElectronics';
import CategoriesBoxClothings from '~/components/partials/homepage/marketplace4/modules/CategoriesBoxClothings';
import CategoriesBoxGardenAndKitchen from '~/components/partials/homepage/marketplace4/modules/CategoriesBoxGardenAndKitchen';
import ProductGroupDealHot from '~/components/partials/product/ProductGroupDealHot';
import HeaderMarketPlace4 from '~/components/shared/headers/HeaderMarketPlace4';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import FooterMarketPlace2 from '~/components/shared/footers/FooterMarketPlace2';
import PageContainer from '~/components/layouts/PageContainer';

const HomeMarketPlace4Page = () => {
    const headers = (
        <>
            <HeaderMarketPlace4 />
            <HeaderMobile />
        </>
    );
    const footer = <FooterMarketPlace2 />;
    return (
        <PageContainer
            header={headers}
            footer={footer}
            title="Home Marketplace v4">
            <main id="homepage-6">
                <MartketPlace4Banner />
                <div className="container">
                    <MartketPlace4SiteFeatures />
                    <MartketPlace4Promotions />
                    <ProductGroupDealHot collectionSlug="deal-of-the-day" />
                    <MartketPlace4TopCategories />
                </div>
                <div className="ps-categories-box">
                    <div className="container">
                        <CategoriesBoxConsumerElectronics />
                        <CategoriesBoxClothings />
                        <CategoriesBoxGardenAndKitchen />
                    </div>
                </div>
            </main>
        </PageContainer>
    );
};

export default HomeMarketPlace4Page;
