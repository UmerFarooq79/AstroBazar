import React from 'react';
import FormHeaderSearch from '~/components/shared/forms/FormHeaderSearch';

const HeaderDashboard = ({
    title = 'Dashboard',
    description = 'Everything here',
}) => {
    return (
        <header className="header--dashboard">
            <div className="header__left">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="header__center">
                <FormHeaderSearch />
            </div>
            <div className="header__right">
                <a className="header__site-link" href="#">
                    <span>View your store</span>
                    <i className="icon-exit-right"></i>
                </a>
            </div>
        </header>
    );
};

export default HeaderDashboard;
