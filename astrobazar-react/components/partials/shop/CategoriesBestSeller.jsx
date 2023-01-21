import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Slider from 'react-slick';
import Product from '../../../components/elements/products/Product';
import { carouselStandard } from '../../../utilities/carousel-helpers';

class CategoriesBestSeller extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { collections } = this.props;
        let products = [];
        if (collections.length > 0) {
            products = collections.find(
                collection => collection.slug === 'shop-best-seller-items'
            ).products;
        }
        return (
            <div className="ps-product-list ps-product-list--2">
                <div className="ps-section__header">
                    <h3>Best Seller Items</h3>
                    <ul className="ps-section__links">
                        <li>
                            <Link href="/shop">
                                <a>Clothing & Apparel</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Garden & Kitchen</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Consumer Electrics</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">
                    <Slider {...carouselStandard} className="ps-carousel">
                        {products &&
                            products.length > 0 &&
                            products.map(product => {
                                return (
                                    <Product
                                        product={product}
                                        key={product.id}
                                    />
                                );
                            })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(CategoriesBestSeller);
