import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { logOut } from '~/store/auth/action';

const AccountQuickLinks = (props) => {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logOut());
    };
    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
        },
        {
            text: 'Notifications',
            url: '/account/notifications',
        },
        {
            text: 'Invoices',
            url: '/account/invoices',
        },
        {
            text: 'Address',
            url: '/account/addresses',
        },
        {
            text: 'Recent Viewed Product',
            url: '/account/recent-viewed-product',
        },
        {
            text: 'Wishlist',
            url: '/account/wishlist',
        },
    ];
    const { isLoggedIn } = props;

    // View
    const linksView = accountLinks.map((item) => (
        <li key={item.text}>
            <Link href={item.url}>
                <a>{item.text}</a>
            </Link>
        </li>
    ));

    if (isLoggedIn === true) {
        return (
            <div className="ps-block--user-account">
                <i className="icon-user"></i>
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {linksView}
                        <li className="ps-block__footer">
                            <a href="#" onClick={(e) => handleLogout(e)}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <i style={{color: "white"}} className="icon-user"></i>
                </div>
                <div style={{color: "#ffbb20"}} className="ps-block__right">
                    <Link href="/account/login">
                        <a>Login</a>
                    </Link>
                    <Link href="/account/register">
                        <a>Register</a>
                    </Link>
                </div>
            </div>
        );
    }
};

export default connect((state) => state)(AccountQuickLinks);
