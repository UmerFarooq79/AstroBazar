import React, { useEffect } from 'react';
import { BackTop } from 'antd';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import {
    setCartItems,
    setCompareItems,
    setWishlistTtems,
} from '~/store/ecomerce/action';
import PageLoader from '~/components/elements/common/PageLoader';
import NavigationList from '~/components/shared/navigation/NavigationList';

const MasterLayout = ({ children }) => {
    const dispatch = useDispatch();
    const [cookies] = useCookies(['cart', 'compare', 'wishlist']);

    function initEcomerceValues() {
        if (cookies) {
            if (cookies.cart) {
                dispatch(setCartItems(cookies.cart));
            }
            if (cookies.wishlist) {
                dispatch(setWishlistTtems(cookies.wishlist));
            }
            if (cookies.compare) {
                dispatch(setCompareItems(cookies.compare));
            }
        }
    }

    useEffect(() => {
        initEcomerceValues();
    }, []);

    return (
        <>
            {children}
            <PageLoader />
            <NavigationList />
            <BackTop>
                <button className="ps-btn--backtop">
                    <i className="icon-arrow-up" />
                </button>
            </BackTop>
        </>
    );
};

export default MasterLayout;
