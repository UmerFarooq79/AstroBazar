import React from 'react';

import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';

const ProductDetailOutOfStock = ({ product }) => (
    <div className="ps-product--detail ps-product--fullwidth">
        <div className="ps-product__header">
            <ThumbnailDefault product={product} />
            <div className="ps-product__info">
                <ModuleDetailTopInformation product={product} />
                <div className="ps-product__desc">
                    <p>
                        Sold By:
                        <a className="mr-20" href="shop-default.html">
                            <strong> Globle Office</strong>
                        </a>
                        Status:
                        <a href="shop-default.html">
                            <strong className="ps-tag--out-stock">
                                {' '}
                                Out of stock
                            </strong>
                        </a>
                    </p>
                    <ul className="ps-list--dot">
                        <li>
                            {' '}
                            Unrestrained and portable active stereo speaker
                        </li>
                        <li> Free from the confines of wires and chords</li>
                        <li> 20 hours of portable capabilities</li>
                        <li>
                            {' '}
                            Double-ended Coil Cord with 3.5mm Stereo Plugs
                            Included
                        </li>
                        <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                </div>
                {/*<ModuleProductDetailDescription product={product} />*/}
                {/*<ModuleDetailShoppingActions product={product} />*/}
                <ModuleProductDetailSpecification />
                <ModuleProductDetailSharing />
                <ModuleDetailActionsMobile />
            </div>
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailOutOfStock;
