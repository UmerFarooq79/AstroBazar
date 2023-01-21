import React from 'react';
import { connect } from 'react-redux';
import FurnitureBanner from '~/components/partials/homepage/furniture/FurnitureBanner';
import FurnitureSiteFeatures from '~/components/partials/homepage/furniture/FurnitureSiteFeatures';
import FurniturePromotions from '~/components/partials/homepage/furniture/FurniturePromotions';
import FurnitureCategories from '~/components/partials/homepage/furniture/FurnitureCategories';
import FurniturePromotions2 from '~/components/partials/homepage/furniture/FurniturePromotions2';
import FurnitureTrendingProducts from '~/components/partials/homepage/furniture/FurnitureTrendingProducts';
import FurnitureShopByRoom from '~/components/partials/homepage/furniture/FurnitureShopByRoom';
import FurnitureBestSaleBrands from '~/components/partials/homepage/furniture/FurnitureBestSaleBrands';
import FurnitureBestSeller from '~/components/partials/homepage/furniture/FurnitureBestSeller';
import HeaderFurniture from '~/components/shared/headers/HeaderFurniture';
import HeaderMobileFurniture from '~/components/shared/headers/HeaderMobileFurniture';
import FooterSecond from '~/components/shared/footers/FooterSecond';
import PageContainer from '~/components/layouts/PageContainer';

const HomeFurniturePage = () => {
    const headers = (
        <>
            <HeaderFurniture />
            <HeaderMobileFurniture />
        </>
    );
    const footer = <FooterSecond classes="ps-footer--furniture" />;

    return (
        <PageContainer header={headers} footer={footer}>
            <main id="homepage-8">
                <FurnitureBanner />
                <FurnitureSiteFeatures />
                <FurniturePromotions />
                <FurnitureBestSeller collectionSlug="furniture-best-sellers" />
                <FurnitureCategories />
                <FurniturePromotions2 />
                <FurnitureTrendingProducts collectionSlug="furniture-trending-products" />
                <FurnitureShopByRoom />
                <FurnitureBestSaleBrands />
            </main>
        </PageContainer>
    );
};

export default connect()(HomeFurniturePage);
