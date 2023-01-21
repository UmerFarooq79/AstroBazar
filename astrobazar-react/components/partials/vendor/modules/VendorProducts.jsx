import React, { Component } from 'react';

import ProductWide from '~/components/elements/products/ProductWide';
import Product from '~/components/elements/products/Product';
import product_data from '~/public/static/data/product';

class VendorProducts extends Component {
    state = {
        listView: true,
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    render() {
        const viewMode = this.state.listView;
        return (
            <div className="ps-shopping vendor-shop">
                <div className="ps-shopping__header">
                    <p>
                        <strong>
                            {' '}
                            {product_data.relatedProduct
                                ? product_data.relatedProduct.length
                                : 0}
                        </strong>{' '}
                        Products found
                    </p>
                    <div className="ps-shopping__actions">
                        <select
                            className="ps-select"
                            data-placeholder="Sort Items">
                            <option>Sort by latest</option>
                            <option>Sort by popularity</option>
                            <option>Sort by average rating</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                        </select>
                        <div className="ps-shopping__view">
                            <p>View</p>
                            <ul className="ps-tab-list">
                                <li
                                    className={
                                        viewMode === true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-grid"></i>
                                    </a>
                                </li>
                                <li
                                    className={
                                        viewMode !== true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-list4"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ps-shopping__content">
                    {viewMode === true ? (
                        <div className="ps-shopping-product">
                            <div className="row">
                                {product_data.relatedProduct &&
                                product_data.relatedProduct.length > 0
                                    ? product_data.relatedProduct.map(
                                          (product) => (
                                              <div
                                                  className="col-lg-3 col-md-4 col-sm-6 col-6 "
                                                  key={product.id}>
                                                  <Product product={product} />
                                              </div>
                                          )
                                      )
                                    : ''}
                            </div>
                        </div>
                    ) : (
                        <div className="ps-shopping-product">
                            {product_data.relatedProduct &&
                            product_data.relatedProduct.length > 0
                                ? product_data.relatedProduct.map((product) => (
                                      <ProductWide
                                          product={product}
                                          key={product.id}
                                      />
                                  ))
                                : ''}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default VendorProducts;
