import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WidgetShopCategories = () => {
    const Router = useRouter();
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);

    const { slug } = Router.query;

    async function getCategories() {
        setLoading(true);
        const responseData = await ProductRepository.getProductCategories();
        if (responseData) {
            setCategories(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            const items = categories.map((item) => (
                <li
                    key={item.slug}
                    className={item.slug === slug ? 'active' : ''}>
                    <Link href={`/category/${item.slug}`}>{item.name}</Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
        } else {
        }
    } else {
        categoriesView = <p>Loading...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Categories</h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetShopCategories;
