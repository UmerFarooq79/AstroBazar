import React, { useEffect, useState } from 'react';
import ModuleStoreInformation from '~/components/partials/stores/modules/ModuleStoreInformation';
import ProductGroupByCarousel from '~/components/partials/product/ProductGroupByCarousel';
import ModuleStoreItems from '~/components/partials/stores/modules/ModuleStoreItems';
import StoreRepository from '~/repositories/StoreRepository';
import { useRouter } from 'next/router';

const StoreDetail = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    const [store, setStore] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getStore(params) {
        setLoading(true);
        const responseData = await StoreRepository.getStoreBySlug(params);
        if (responseData) {
            setStore(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getStore(slug);
    }, [slug]);
    //Views
    let storeProductsView;
    if (!loading) {
        if (store && store.products.length > 0) {
            storeProductsView = (
                <div className="ps-store-products">
                    <ProductGroupByCarousel
                        collectionSlug="best-seller-products"
                        title="Best Seller Products"
                    />
                    <ModuleStoreItems products={store.products} />
                </div>
            );
        } else {
            storeProductsView = <p>No product found.</p>;
        }
    } else {
        storeProductsView = <p>Loading...</p>;
    }
    return (
        <div className="ps-vendor-store">
            <div className="container">
                <div className="ps-section__container">
                    <div className="ps-section__left">
                        {store !== null && (
                            <ModuleStoreInformation
                                store={store && store !== null ? store : null}
                            />
                        )}
                    </div>
                    <div className="ps-section__right">
                        <div className="ps-block--vendor-filter">
                            <div className="ps-block__left"></div>
                            <div className="ps-block__right">
                                <form
                                    className="ps-form--search"
                                    action="/"
                                    method="get">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search in this shop"
                                    />
                                    <button>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        {storeProductsView}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreDetail;
