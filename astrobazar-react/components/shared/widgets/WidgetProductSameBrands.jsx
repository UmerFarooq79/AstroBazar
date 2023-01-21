import React, { useEffect, useState } from 'react';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import Product from '~/components/elements/products/Product';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';

const WidgetProductSameBrands = ({ collectionSlug }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            collectionSlug
        );
        if (responseData) {
            setProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemsView = productItems.map((item) => (
                <Product product={item} key={item.id} />
            ));
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        productItemsView = generateTempArray(3).map((item) => (
            <SkeletonProduct key={item} />
        ));
    }

    return (
        <aside className="widget widget_same-brand">
            <h3>Same Brand</h3>
            <div className="widget__content">{productItemsView}</div>
        </aside>
    );
};

export default WidgetProductSameBrands;
