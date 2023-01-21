import React from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';

const ProductDetailAffiliate = ({ product }) => {
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailDefault product={product} />
                <div className="ps-product__info">
                    <ModuleDetailTopInformation product={product} />
                    <ModuleProductDetailDescription product={product} />
                    <div className="ps-product__shopping">
                        <a
                            className="ps-btn"
                            href="https://www.amazon.com/Premium-Military-Sunglasses-Polarized-protection/dp/B01GVRZ1BS/"
                            target="_blank">
                            Purchase on Amazon
                        </a>
                        <div className="ps-product__actions">
                            <a href="#">
                                <i className="icon-heart"></i>
                            </a>
                            <a href="#">
                                <i className="icon-chart-bars"></i>
                            </a>
                        </div>
                    </div>
                    <ModuleProductDetailSpecification />
                    <ModuleProductDetailSharing />
                    <ModuleDetailActionsMobile />
                </div>
            </div>
            <DefaultDescription />
        </div>
    );
};

export default ProductDetailAffiliate;
