import React from 'react';
import MarketPlaceHomeBanner from '~/components/partials/homepage/marketplace/MartketPlaceHomeBanner';
import MarketPlaceSiteFeatures from '~/components/partials/homepage/marketplace/MarketPlaceSiteFeatures';
import MarketPlacePromotion from '~/components/partials/homepage/marketplace/MarketPlacePromotions';
import MarketPlaceDealOfDay from '~/components/partials/homepage/marketplace/MarketPlaceDealOfDay';
import MarketClothingsAndApparel from '~/components/partials/homepage/marketplace/modules/MarketClothingsAndApparel';
import MarketConsumerElectronics from '~/components/partials/homepage/marketplace/modules/MarketConsumerElectronics';
import MarketComputerAndTechnology from '~/components/partials/homepage/marketplace/modules/MarketComputerAndTechnology';
import MarketGardenAndKitchen from '~/components/partials/homepage/marketplace/modules/MarketGardenAndKitchen';
import MarketHeathyAndBeauty from '~/components/partials/homepage/marketplace/modules/MarketHeathyAndBeauty';
import Newsletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';
import MarketPlacePromotionHeader from '~/components/partials/homepage/marketplace/MarketPlacePromotionHeader';
import HeaderMarketPlace from '~/components/shared/headers/HeaderMarketPlace';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';

const HomeMarketPlacePage = () => {
    const headers = (
        <>
            <MarketPlacePromotionHeader />
            <HeaderMarketPlace />
            <HeaderMobile />
        </>
    );
    return (
        <PageContainer header={headers} title="Home Market Place">
            <main id="homepage-3">
                <MarketPlaceHomeBanner />
                <MarketPlaceSiteFeatures />
                <MarketPlacePromotion />
                <MarketPlaceDealOfDay collectionSlug="deal-of-the-day" />
                <div className="ps-section--gray">
                    <div className="container">
                        <MarketClothingsAndApparel collectionSlug="clothings" />
                        <MarketConsumerElectronics collectionSlug="consumer-electronics" />
                        <MarketComputerAndTechnology collectionSlug="customer-bought-products" />
                        <MarketGardenAndKitchen collectionSlug="garden-and-kitchen" />
                        <MarketHeathyAndBeauty categorySlug="health-and-beauty" />
                    </div>
                </div>
                <Newsletters />
            </main>
        </PageContainer>
    );
};
export default HomeMarketPlacePage;
