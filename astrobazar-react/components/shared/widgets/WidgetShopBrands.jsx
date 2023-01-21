import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import { Checkbox } from 'antd';
import { Radio, Input } from 'antd';
import { useRouter } from 'next/router';

const WidgetShopBrands = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    const [brands, setBrands] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getCategories() {
        setLoading(true);
        const responseData = await ProductRepository.getBrands();
        if (responseData) {
            let brandsGroup = [];
            if (responseData.length > 0) {
                responseData.forEach((brand) => {
                    brandsGroup.push({
                        id: brand.id,
                        value: brand.slug,
                        label: brand.name,
                    });
                });
            }
            setBrands(brandsGroup);

            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    function handleSelectBrand(e) {
        Router.push(`/brand/${e.target.value}`);
    }

    useEffect(() => {
        getCategories();
    }, []);

    // Views
    let brandsView;
    if (!loading) {
        if (brands && brands.length > 0) {
            const items = brands.map((item) => (
                <li key={item.id}>
                    <Link href={`shop/${item.slug}`}>{item.name}</Link>
                </li>
            ));
            brandsView = <ul className="ps-list--brands">{items}</ul>;
        } else {
        }
    } else {
        brandsView = <p>Loading...</p>;
    }
    return (
        <aside className="widget widget_shop widget_shop--brand">
            <h4 className="widget-title">By Brands</h4>
            <figure>
                <Radio.Group
                    defaultValue={slug}
                    options={brands}
                    onChange={handleSelectBrand}
                />
            </figure>
        </aside>
    );
};

export default WidgetShopBrands;
