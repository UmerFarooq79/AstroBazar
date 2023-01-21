import React, { useEffect, useState } from 'react';

import MediaRepository from '~/repositories/MediaRepository';
import { getItemBySlug } from '~/utilities/product-helper';
import Promotion from '~/components/elements/media/Promotion';

const HomeAdsColumns = () => {
    const [promotion1, setPromotion1] = useState(null);
    const [promotion2, setPromotion2] = useState(null);
    const [promotion3, setPromotion3] = useState(null);

    async function getPromotions() {
        const responseData = await MediaRepository.getPromotionsBySlug(
            'home_fullwidth_promotions'
        );
        if (responseData) {
            setPromotion1(getItemBySlug(responseData, 'middle_1'));
            setPromotion2(getItemBySlug(responseData, 'middle_2'));
            setPromotion3(getItemBySlug(responseData, 'middle_3'));
        }
    }
    useEffect(() => {
        getPromotions();
    }, []);

    return (
        <div className="ps-home-ads">
            <div className="ps-container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link="/shop"
                            image={promotion1 ? promotion1.image : null}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link="/shop"
                            image={promotion2 ? promotion2.image : null}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link="/shop"
                            image={promotion3 ? promotion3.image : null}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAdsColumns;
