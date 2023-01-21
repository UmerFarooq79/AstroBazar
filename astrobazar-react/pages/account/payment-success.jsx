import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import Link from 'next/link';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';

const PaymentSuccessPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Payment Success',
        },
    ];

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Payment">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="ps-checkout ps-section--shopping">
                        <div className="container">
                            <div className="ps-section__header">
                                <h1>Payment Success</h1>
                            </div>
                            <div className="ps-section__content">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                        <div className="ps-block--payment-success">
                                            <div className="ps-block__content">
                                                <h3>
                                                    Thank you! Your order is
                                                    processing.
                                                </h3>
                                                <p>
                                                    Your order number is{' '}
                                                    <strong>123</strong>
                                                </p>
                                                <p>
                                                    An email will be sent
                                                    containing information about
                                                    your purchase. If you have
                                                    any questions about your
                                                    purchase, email us at{' '}
                                                    <a
                                                        href="mailto@contact@martfury.com"
                                                        className="ps-highlight">
                                                        <strong>
                                                            contact@astrobazar.com
                                                        </strong>
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="ps-block__bottom">
                                                <Link href="/">
                                                    <a className="ps-btn">
                                                        <i className="icon-arrow-left mr-2"></i>
                                                        Back to shop
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
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default PaymentSuccessPage;
