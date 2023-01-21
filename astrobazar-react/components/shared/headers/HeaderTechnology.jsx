import React, { useEffect } from 'react';

import Link from 'next/link';
import menuData from '~/public/static/data/menu';
import CurrencyDropdown from '~/components/shared/headers/modules/CurrencyDropdown';
import LanguageSwicher from '~/components/shared/headers/modules/LanguageSwicher';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import ElectronicHeaderActions from '~/components/shared/headers/modules/ElectronicHeaderActions';
import Menu from '~/components/elements/menu/Menu';
import { stickyHeader } from '~/utilities/common-helpers';

const HeaderTechnology = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    const menuTechnology = [
        {
            text: 'Hot Deal',
            url: '/home/technology',
            icon: 'icon-star',
        },
        {
            text: 'Smartphone',
            url: '/home/technology',
            icon: 'icon-smartphone',
        },
        {
            text: 'Tablets',
            url: '/home/technology',
            icon: 'ion-ipad',
        },
        {
            text: 'Laptop',
            url: '/home/technology',
            icon: 'icon-laptop',
        },
        {
            text: 'Sounds',
            url: '/home/technology',
            icon: 'icon-headphone',
        },
        {
            text: 'Technology Toys',
            url: '/home/technology',
            icon: 'icon-mic2',
        },
        {
            text: 'Accesories',
            url: '/home/technology',
            icon: 'icon-headphones',
        },
    ];
    return (
        <header
            className="header header--standard header--technology"
            id="headerSticky">
            <div className="header__top">
                <div className="container">
                    <div className="header__left">
                        <p>
                            SHOPPING CENTER
                            <strong className="ml-1">
                                {' '}
                                for all orders over $100
                            </strong>
                        </p>
                    </div>
                    <div className="header__right">
                        <ul className="header__top-links">
                            <li>
                                <Link href="/vendor/store-list">
                                    <a>Store Location</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/page/blank">
                                    <a>Track Your Order</a>
                                </Link>
                            </li>
                            <li>
                                <CurrencyDropdown />
                            </li>
                            <li>
                                <LanguageSwicher />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header__content">
                <div className="container">
                    <div className="header__content-left">
                        <Link href="/home/technology">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/logo-technology.png"
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                            </div>
                            <div className="menu__content">
                                <Menu
                                    source={menuData.product_categories}
                                    className="menu--dropdown"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="header__content-center">
                        <SearchHeader />
                    </div>
                    <div className="header__content-right">
                        <ElectronicHeaderActions />
                    </div>
                </div>
            </div>
            <nav className="navigation">
                <div className="container">
                    <Menu
                        source={menuTechnology}
                        className="menu menu--technology"
                    />
                </div>
            </nav>
        </header>
    );
};

export default HeaderTechnology;
