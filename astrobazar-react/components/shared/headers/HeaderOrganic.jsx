import React, { useEffect } from 'react';
import Link from 'next/link';
import menuData from '~/public/static/data/menu';

import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import ElectronicHeaderActions from '~/components/shared/headers/modules/ElectronicHeaderActions';
import Menu from '~/components/elements/menu/Menu';
import { stickyHeader } from '~/utilities/common-helpers';

const HeaderOrganic = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header className="header header--organic" id="headerSticky">
            <div className="header__top">
                <div className="container">
                    <div className="header__left">
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
                        <Link href="/home/organic">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/logo-organic.png"
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="header__center">
                        <SearchHeader />
                    </div>
                    <div className="header__right">
                        <ElectronicHeaderActions />
                    </div>
                </div>
            </div>
            <nav className="navigation">
                <div className="container">
                    <div className="navigation__left">
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
                    <div className="navigation__right">
                        <Menu
                            source={menuData.menuPrimary.menu_1}
                            className="menu menu--organic"
                        />
                        <div className="ps-block--header-hotline inline">
                            <p>
                                <i className="icon-telephone"></i>Hotline:
                                <strong> 1-800-234-5678</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderOrganic;
