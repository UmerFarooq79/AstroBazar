import React from 'react';

const ModuleShopSortBy = () => {
    return (
        <select
            className="ps-select form-control"
            data-placeholder="Sort Items">
            <option>Sort by latest</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
        </select>
    );
};

export default ModuleShopSortBy;
