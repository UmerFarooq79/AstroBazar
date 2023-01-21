import React, { useEffect } from 'react';
import MobileHeaderActions from '../headers/modules/MobileHeaderActions';
import Link from 'next/link';
import { stickyHeader } from '~/utilities/common-helpers';

const HeaderMobileProduct = () => {
    const stickyHeader = () => {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        const header = document.getElementById('header-mobile');
        if (header !== null) {
            if (number >= 300) {
                header.classList.add('header--sticky');
            } else {
                header.classList.remove('header--sticky');
            }
        }
    };
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--mobile header--mobile-product"
            id="header-mobile"
            data-sticky="true">
            <div className="navigation--mobile">
                <div className="navigation__left">
                    <Link href="/shop">
                        <a href="/" className="header__back">
                            <i className="icon-chevron-left"></i>
                            <strong>Back to previous</strong>
                        </a>
                    </Link>
                </div>
                <div className="navigation__right">
                    <MobileHeaderActions />
                </div>
            </div>
        </header>
    );
};

export default HeaderMobileProduct;
