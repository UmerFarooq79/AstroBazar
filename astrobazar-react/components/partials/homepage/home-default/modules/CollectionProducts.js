import React from 'react';
import { carouselFullwidth } from '../../../../../utilities/carousel-helpers';
import Product from '../../../../elements/products/Product';
import Slider from 'react-slick';

const CollectionProducts = ({ products }) => (
    <div>
        <Slider {...carouselFullwidth} infinite={products.length > 7 ? true: false} className="ps-carousel outside">
            {products.map(product => (
                <div className="item" key={product.id}>
                    <Product product={product} />
                </div>
            ))}
        </Slider>
    </div>
);

export default CollectionProducts;
