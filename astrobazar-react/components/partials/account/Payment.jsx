import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import ModulePaymentShipping from '~/components/ecomerce/modules/ModulePaymentShipping';
import ModulePaymentMethods from '~/components/ecomerce/modules/ModulePaymentMethods';

const Payment = () => {
    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Payment</h1>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="ps-block--shipping">
                                <ModulePaymentShipping />
                                <ModulePaymentMethods />
                                <div className="ps-block__footer">
                                    <Link href="/account/shipping">
                                        <a>
                                            <i className="icon-arrow-left mr-2"></i>
                                            Return to shipping
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                            <div className="ps-form__orders">
                                <ModulePaymentOrderSummary />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect()(Payment);
