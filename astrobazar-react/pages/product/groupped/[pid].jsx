import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ProductDetailGroupped from '~/components/elements/detail/ProductDetailGroupped';
import PageContainer from '~/components/layouts/PageContainer';
import Newsletters from '~/components/partials/commons/Newletters';

const ProductGrouppedPage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getProduct(pid) {
        setLoading(true);
        const responseData = await ProductRepository.getProductsById(pid);
        if (responseData) {
            setProduct(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getProduct(pid);
    }, [pid]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/shop',
        },
        {
            text: 'Product groupped',
        },
    ];
    // Views
    let productView;
    if (!loading) {
        if (product) {
            productView = <ProductDetailGroupped product={product} />;
        } else {
        }
    } else {
        productView = <SkeletonProductDetail />;
    }
    return (
        <PageContainer title={product ? product.title : 'Loading...'}>
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">{productView}</div>
                        <div className="ps-page__right">
                            <ProductWidgets />
                        </div>
                    </div>

                    <CustomerBought
                        layout="fullwidth"
                        collectionSlug="deal-of-the-day"
                    />
                    <RelatedProduct collectionSlug="shop-recommend-items" />
                </div>
            </div>
            <Newsletters />
        </PageContainer>
    );
};

export default ProductGrouppedPage;
