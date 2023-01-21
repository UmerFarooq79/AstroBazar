import React from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';

const ProductDetailExtended = ({ product }) => (
    <div className="ps-product--detail">
        <div className="ps-product__header">
            <ThumbnailDefault product={product} vertical={false} />

            <div className="ps-product__info">
                <ModuleDetailTopInformation product={product} />
                <ModuleProductDetailDescription product={product} />
                <ModuleDetailShoppingActions
                    product={product}
                    extended={true}
                />
                <ModuleProductDetailSpecification />
                <ModuleProductDetailSharing />
                <ModuleDetailActionsMobile />
            </div>
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailExtended;
