import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ProductDetailBox from '~/components/elements/detail/ProductDetailBox';
import PageContainer from '~/components/layouts/PageContainer';
import Newsletters from '~/components/partials/commons/Newletters';

const ProductDefaultBoxedPage = () => {
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
            productView = <ProductDetailBox product={product} />;
        } else {
        }
    } else {
        productView = <SkeletonProductDetail />;
    }
    return (
        <PageContainer title={product ? product.title : 'Loading...'}>
            <BreadCrumb breacrumb={breadCrumb} />
            <div className="ps-page--product ps-page--product-box">
                <div className="container">
                    {productView}
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

export default ProductDefaultBoxedPage;
