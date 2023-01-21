import React from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import PageContainer from '~/components/layouts/PageContainer';

const HomepageDefaultPage = () => {
    return (
        <PageContainer title="">
            <main id="homepage-1">
                <HomeDefaultBanner />
                <SiteFeatures />
                <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
                <HomeAdsColumns />
                <HomeDefaultTopCategories />
                <HomeDefaultProductListing
                    collectionSlug="consumer-electronics"
                    title="Consumer Electronics"
                />
                <HomeDefaultProductListing
                    collectionSlug="clothings"
                    title="Clothings"
                />
                <HomeDefaultProductListing
                    collectionSlug="garden-and-kitchen"
                    title="Garden & Kitchen"
                />
                <HomeAds />
                <DownLoadApp />
                <NewArrivals collectionSlug="new-arrivals-products" />
                <Newletters />
            </main>
        </PageContainer>
    );
};

export default HomepageDefaultPage;
