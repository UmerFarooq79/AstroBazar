import React, { useState } from 'react';
import { Slider, Checkbox } from 'antd';
import { useRouter } from 'next/router';

const WidgetShopFilterByPriceRange = () => {
    const Router = useRouter();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(2000);

    function handleChangeRange(value) {
        setMin(value[0]);
        price_lt: value[1], setMax(value[1]);

        /*  const params = {
            price_gt: value[0],
        };*/
        Router.push(`/shop?price_gt=${value[0]}&price_lt=${value[1]}`);
        /*this.props.dispatch(getProductsByPrice(params));*/
    }

    return (
        <aside className="widget widget_shop">
            <figure>
                <h4 className="widget-title">By Price</h4>
                <Slider
                    range
                    defaultValue={[0, 2000]}
                    max={2000}
                    onAfterChange={(e) => handleChangeRange(e)}
                />
                <p>
                    Price: ${min} - $ {max}
                </p>
            </figure>
        </aside>
    );
};

export default WidgetShopFilterByPriceRange;
