import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import ProductDetailExtended from '~/components/elements/detail/ProductDetailExtended';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import PageContainer from '~/components/layouts/PageContainer';
import Newsletters from '~/components/partials/commons/Newletters';

const ProductDefaultPage = () => {
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
            text: product ? product.title : 'Loading...',
        },
    ];
    // Views
    let productView;
    if (!loading) {
        if (product) {
            productView = <ProductDetailExtended product={product} />;
        } else {
        }
    } else {
        productView = <SkeletonProductDetail />;
    }
    return (
        <PageContainer
            title={product ? product.title : 'Loading...'}
            boxed={true}>
            <BreadCrumb breacrumb={breadCrumb} />
            <div className="ps-page--product">
                <div className="container">
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
            <Newsletters layout="container" />
        </PageContainer>
    );
};

export default ProductDefaultPage;
