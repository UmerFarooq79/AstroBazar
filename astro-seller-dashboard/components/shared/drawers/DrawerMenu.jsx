import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import MenuSidebar from '~/components/shared/menus/MenuSidebar';

const DrawerMenu = ({ isDrawerMenu }) => {
    const dispatch = useDispatch();
    const handleCloseDrawer = () => {
        dispatch(toggleDrawerMenu(false));
    };
    return (
        <aside className={`ps-drawer--mobile ${isDrawerMenu && 'active'}`}>
            <div className="ps-drawer__header">
                <h4> Menu</h4>
                <button
                    className="ps-drawer__close"
                    onClick={handleCloseDrawer}>
                    <i className="icon icon-cross"></i>
                </button>
            </div>
            <div className="ps-drawer__content">
                <MenuSidebar />
            </div>
        </aside>
    );
};

export default connect((state) => state.app)(DrawerMenu);
