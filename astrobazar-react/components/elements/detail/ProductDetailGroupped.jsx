import React from 'react';

import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleDetailProductGroup from '~/components/elements/detail/modules/ModuleDetailProductGroup';

const ProductDetailGroupped = ({ product }) => (
    <div className="ps-product--detail ps-product--fullwidth">
        <div className="ps-product__header">
            <ThumbnailDefault product={product} />
            <div className="ps-product__info">
                <ModuleDetailTopInformation product={product} />
                <ModuleProductDetailDescription product={product} />
                <ModuleDetailProductGroup />
                <ModuleDetailShoppingActions product={product} />
                <ModuleProductDetailSpecification />
                <ModuleProductDetailSharing />
                <ModuleDetailActionsMobile />
            </div>
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailGroupped;
