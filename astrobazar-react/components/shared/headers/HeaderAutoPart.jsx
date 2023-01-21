import React, { useEffect } from 'react';
import Link from 'next/link';
import Menu from '~/components/elements/menu/Menu';
import CurrencyDropdown from '~/components/shared/headers/modules/CurrencyDropdown';
import AccountQuickLinks from '~/components/shared/headers/modules/AccountQuickLinks';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import MiniCart from '~/components/shared/headers/modules/MiniCart';
import { stickyHeader } from '~/utilities/common-helpers';

const HeaderAutoPart = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    const menuAutopart = [
        {
            text: 'Interior',
            url: '/shop',
        },
        {
            text: 'Exterior',
            url: '/shop',
        },
        {
            text: 'Body parts',
            url: '/shop',
        },
        {
            text: 'Wheels & Tires',
            url: '/shop',
        },
        {
            text: 'Lighting',
            url: '/shop',
        },
        {
            text: 'Performance',
            url: '/shop',
        },
        {
            text: 'Repare part',
            url: '/shop',
        },
        {
            text: 'Tools & Garage',
            url: '/shop',
        },
    ];
    const menuAutopartCategories = [
        'Interior',
        'Interior',
        'Wheels & Tires',
        'Exterior',
        'Performance',
        'Body parts',
        'Lighting',
        'Accessories',
    ];
    // views
    const menuCategoriesView = menuAutopartCategories.map((item) => (
        <li key={item}>
            <Link href="/shop">
                <a>{item}</a>
            </Link>
        </li>
    ));

    return (
        <header
            className="header header--standard header--autopart"
            id="headerSticky">
            <div className="header__top">
                <div className="container">
                    <div className="header__left">
                        <p>
                            <strong>FREE SHIPPING</strong> for all orders over
                            $100
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
                                <Link href="/account/order-tracking">
                                    <a>Tract your order</a>
                                </Link>
                            </li>
                            <li>
                                <CurrencyDropdown />
                            </li>
                            <li>
                                <AccountQuickLinks isLoggedIn={false} />
                                {/*  {auth.isLoggedIn &&
                                Boolean(auth.isLoggedIn) === true ? (
                                    <AccountQuickLinks isLoggedIn={true} />
                                ) : (
                                    <AccountQuickLinks isLoggedIn={false} />
                                )}*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header__content">
                <div className="container">
                    <div className="header__content-left">
                        <Link href="/home/auto-part">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/logo-autopart.png"
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span>Shop by Department</span>
                            </div>
                            <div className="menu__content">
                                <ul className="menu--dropdown">
                                    {menuCategoriesView}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__content-center">
                        <SearchHeader />
                    </div>
                    <div className="header__content-right">
                        <div className="header__actions">
                            <div className="ps-block--header-hotline">
                                <div className="ps-block__left">
                                    <i className="icon-telephone"></i>
                                </div>
                                <div className="ps-block__right">
                                    <p>
                                        Hotline
                                        <strong>1-800-234-5678</strong>
                                    </p>
                                </div>
                            </div>
                            <MiniCart />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navigation">
                <div className="container">
                    <Menu
                        source={menuAutopart}
                        className="menu menu--technology"
                    />
                </div>
            </nav>
        </header>
    );
};

export default HeaderAutoPart;
