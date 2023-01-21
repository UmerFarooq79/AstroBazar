import React from 'react';
import ProductGroupDealOfDay from '~/components/partials/product/ProductGroupDealOfDay';
import ElectronicProductGroupWithCarousel from '~/components/partials/homepage/electronic/ElectronicProductGroupWithCarousel';
import ElectronicBanner from '~/components/partials/homepage/electronic/ElectronicBanner';
import ElectronicTopCategories from '~/components/partials/homepage/electronic/ElectronicTopCategories';
import ElectronicPromotions2 from '~/components/partials/homepage/electronic/ElectronicPromotions2';
import SiteFeatures from '~/components/partials/homepage/autopart/SiteFeatures';
import PageContainer from '~/components/layouts/PageContainer';
import HeaderElectronic from '~/components/shared/headers/HeaderElectronic';
import HeaderMobileElectronic from '~/components/shared/headers/HeaderMobileElectronic';
import FooterSecond from '~/components/shared/footers/FooterSecond';

const HomeElectronicsPage = () => {
    const smartPhoneLinks = ['Iphone, Ipad, Samsung'];
    const electronicLinks = [
        'Smart',
        'TV LED',
        'Air Conditions',
        'Sony Speakers',
        'Panasonic Refrigerations',
    ];
    const computerLinks = [
        'Laptop',
        'Desktop PC',
        'Smartphone',
        'Mainboards',
        'PC Gaming',
        'Accessories',
    ];
    const cameraLinks = [
        'Videos',
        'Projectors',
        'Digital Cameras',
        'Printers & Scanners',
        'Accessorices',
    ];

    const headers = (
        <>
            <HeaderElectronic />
            <HeaderMobileElectronic />
        </>
    );

    const footer = <FooterSecond classes="ps-footer--electronic" />;

    return (
        <PageContainer
            title="Home Electronics"
            header={headers}
            footer={footer}>
            <main id="homepage-7">
                <ElectronicBanner />
                <ElectronicTopCategories />
                <ProductGroupDealOfDay
                    categorySlug="computers-and-technologies"
                    boxed={true}
                />
                <ElectronicProductGroupWithCarousel
                    collectionSlug="electronics-best-sellers"
                    title="Best Seller In The Last Month"
                    links={smartPhoneLinks}
                />
                <ElectronicPromotions2 />
                <ElectronicProductGroupWithCarousel
                    collectionSlug="electronic_computer_technology"
                    title="Computers & Technology"
                    links={computerLinks}
                />
                <ElectronicProductGroupWithCarousel
                    categorySlug="consumer-electrics"
                    title="Home Electronics"
                    links={electronicLinks}
                />
                <ElectronicProductGroupWithCarousel
                    collectionSlug="electronics-cameras-and-videos"
                    title="Cameras & Videos"
                    links={cameraLinks}
                />
                <SiteFeatures />
            </main>
        </PageContainer>
    );
};

export default HomeElectronicsPage;
