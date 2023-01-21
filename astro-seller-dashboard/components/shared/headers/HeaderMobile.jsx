import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const HeaderMobile = ({ isDrawerMenu }) => {
    const dispatch = useDispatch();
    const handleOpenDrawer = () => {
        dispatch(toggleDrawerMenu(true));
    };
    return (
        <header className="header--mobile">
            <div className="header__left">
                <button className="ps-drawer-toggle" onClick={handleOpenDrawer}>
                    <i className="icon icon-menu"></i>
                </button>
                <img src="" alt="" />
            </div>
            <div className="header__center">
                <a className="ps-logo" href="#">
                    <img src="/img/logo.png" alt="" />
                </a>
            </div>
            <div className="header__right">
                <a className="header__site-link" href="#">
                    <i className="icon-exit-right"></i>
                </a>
            </div>
        </header>
    );
};

export default connect((state) => state.app)(HeaderMobile);
