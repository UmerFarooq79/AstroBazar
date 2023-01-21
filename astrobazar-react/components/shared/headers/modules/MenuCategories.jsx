import React from 'react';
import menuData from '~/public/static/data/menu.json';
import Menu from '~/components/elements/menu/Menu';

const MenuCategories = () => (
    <Menu source={menuData.product_categories} className="menu--dropdown" />
);

export default MenuCategories;
