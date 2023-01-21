import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Product from '~/components/elements/products/Product';
import ProductGroupGridItems from '~/components/partials/product/ProductGroupGridItems';
import PageContainer from '~/components/layouts/PageContainer';
import Newsletters from '~/components/partials/commons/Newletters';
import useGetProducts from '~/hooks/useGetProducts';
import { useRouter } from 'next/router';

const SearchPage = () => {
    const [pageSize] = useState(100);
    const [keyword, setKeyword] = useState('');
    const { productItems, loading, getProducts } = useGetProducts();
    const Router = useRouter();
    const { query } = Router;

    function handleSetKeyword() {
        if (query && query.keyword !== '') {
            setKeyword(query.keyword);
        } else {
            setKeyword('');
        }
    }

    useEffect(() => {
        if (query && query.keyword) {
            handleSetKeyword(query.keyword);
            const queries = {
                _limit: pageSize,
                title_contains: query.keyword,
            };
            getProducts(queries);
        }
    }, [query]);

    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Search Result',
        },
    ];

    let shopItemsView, statusView;
    if (!loading) {
        if (productItems) {
            shopItemsView = (
                <ProductGroupGridItems columns={6} pageSize={pageSize} />
            );
            if (productItems.length > 0) {
                const items = productItems.map((item) => {
                    return (
                        <div className="col-md-3 col-sm-6 col-6" key={item.id}>
                            <Product product={item} />
                        </div>
                    );
                });
                shopItemsView = (
                    <div className="ps-product-items row">{items}</div>
                );
                statusView = (
                    <p>
                        <strong style={{ color: '#000' }}>
                            {productItems.length}
                        </strong>{' '}
                        record(s) found.
                    </p>
                );
            } else {
                shopItemsView = <p>No product(s) found.</p>;
            }
        } else {
            shopItemsView = <p>No product(s) found.</p>;
        }
    } else {
        statusView = <p>Searching...</p>;
    }

    return (
        <PageContainer title={`Search results for: "${keyword}" `}>
            <div className="ps-page">
                <BreadCrumb breacrumb={breadcrumb} />
            </div>
            <div className="container">
                <div className="ps-shop ps-shop--search">
                    <div className="container">
                        <div className="ps-shop__header">
                            <h1>
                                Search result for: "<strong>{keyword}</strong>"
                            </h1>
                        </div>
                        <div className="ps-shop__content">
                            {statusView}
                            {shopItemsView}
                        </div>
                    </div>
                </div>
            </div>
            <Newsletters layout="container" />
        </PageContainer>
    );
};

export default SearchPage;
