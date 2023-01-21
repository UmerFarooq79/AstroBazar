import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import CatalogTop from '~/components/partials/shop/CatalogTop';
import ConsummerElectronics from '~/components/partials/shop/categories-box/ConsummerElectronics';
import MoreCategories from '~/components/partials/shop/MoreCategories';
import GardenAndKitchen from '~/components/partials/shop/categories-box/GardenAndKitchen';
import ClothingAndApparel from '~/components/partials/shop/categories-box/ClothingAndApparel';
import shop_categories from '~/public/static/data/shopCategories';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const ShopCategoriesPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop Default',
        },
    ];
    return (
        <PageContainer footer={<FooterDefault />} title="Shop Categories">
            <div className="ps-page--shop" id="shop-categories">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <CatalogTop />
                    <ConsummerElectronics
                        data={shop_categories.electronicCollection}
                    />
                    <ClothingAndApparel
                        data={shop_categories.clothingCollection}
                    />
                    <GardenAndKitchen
                        data={shop_categories.kitchenCollection}
                    />
                    <MoreCategories data={shop_categories.categories} />
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default ShopCategoriesPage;
