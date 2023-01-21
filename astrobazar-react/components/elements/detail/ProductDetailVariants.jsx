import React from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleProductHasVariants from '~/components/elements/detail/modules/ModuleProductHasVariants';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';

const ProductDetailVariants = ({ product }) => {
    console.log({ product });
    if (product !== null && typeof product !== 'Array') {
        if (product.variants.length > 0) {
            return (
                <div className="ps-product--detail ps-product--fullwidth">
                    <ModuleProductHasVariants product={product} />
                    <DefaultDescription />
                </div>
            );
        } else {
            return (
                <div className="ps-product--detail ps-product--fullwidth">
                    <div className="ps-product__header">
                        <ThumbnailDefault product={product} />
                        <div className="ps-product__info">
                            <ModuleDetailTopInformation product={product} />
                            <ModuleProductDetailDescription product={product} />
                            <ModuleDetailShoppingActions product={product} />
                            <ModuleProductDetailSpecification />
                            <ModuleProductDetailSharing />
                            <ModuleDetailActionsMobile />
                        </div>
                    </div>
                    <DefaultDescription />
                </div>
            );
        }
    } else {
        return <p>No Data</p>;
    }
};

export default ProductDetailVariants;
