import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Product from '../../../elements/products/Product';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class ElectronicBestSeller extends Component {
    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-product-list ps-product-list--2">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Best Seller In The Last Month</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Top 20</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>TV Televisions</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Speakers</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Air Conditions</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Cameras & Videos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>View All</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselStandard}
                            className="ps-carousel outside">
                            {products.map(product => (
                                <Product
                                    product={product}
                                    key={product.title}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => state.collection)(ElectronicBestSeller);
