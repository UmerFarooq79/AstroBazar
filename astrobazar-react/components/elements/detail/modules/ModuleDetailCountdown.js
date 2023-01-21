import React from 'react';
import CountDown from '~/components/elements/CountDown';

const ModuleDetailCountdown = () => {
    return (
        <div className="ps-product__countdown">
            <figure>
                <figcaption>
                    Don't Miss Out! This promotion will expires in
                </figcaption>
                <CountDown
                    timeTillDate="12 31 2020, 6:00 am"
                    timeFormat="MM DD YYYY, h:mm a"
                />
            </figure>
            <figure>
                <figcaption>Sold Items</figcaption>
                <div
                    className="ps-product__progress-bar ps-progress"
                    data-value="13">
                    <div className="ps-progress__value">
                        <span></span>
                    </div>
                    <p>
                        <b>20/85</b> Sold
                    </p>
                </div>
            </figure>
        </div>
    );
};

export default ModuleDetailCountdown;
