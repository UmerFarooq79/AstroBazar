import React, { useEffect } from 'react';
import Link from 'next/link';
import menuData from '~/public/static/data/menu';
import CurrencyDropdown from '~/components/shared/headers/modules/CurrencyDropdown';
import LanguageSwicher from '~/components/shared/headers/modules/LanguageSwicher';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import ElectronicHeaderActions from '~/components/shared/headers/modules/ElectronicHeaderActions';
import Menu from '~/components/elements/menu/Menu';
import { stickyHeader } from '~/utilities/common-helpers';

const HeaderMarketPlace4 = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--standard header--market-place-4"
            id="headerSticky">
            <div className="header__top">
                <div className="container">
                    <div className="header__left">
                        <p>Welcome to Martfury Online Shopping Store !</p>
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
                        <Link href="/home/market-place-4">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/logo_light.png"
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> Shop by Department</span>
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
                        <p>
                            <Link href="/shop">
                                <a>iphone x</a>
                            </Link>
                            <Link href="/shop">
                                <a>virtual</a>
                            </Link>
                            <Link href="/shop">
                                <a>apple</a>
                            </Link>
                            <Link href="/shop">
                                <a>wireless</a>
                            </Link>
                            <Link href="/shop">
                                <a>simple chair</a>
                            </Link>
                            <Link href="/shop">
                                <a>classic watch</a>
                            </Link>
                            <Link href="/shop">
                                <a>macbook</a>
                            </Link>
                        </p>
                    </div>
                    <div className="header__content-right">
                        <ElectronicHeaderActions />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMarketPlace4;
