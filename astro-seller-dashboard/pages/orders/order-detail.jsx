import React, { useEffect } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import ModuleOrderShippingInformation from '~/components/partials/orders/ModuleOrderShippingInformation';
import ModuleOrderBillingInformation from '~/components/partials/orders/ModuleOrderBillingInformation';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const OrderDetailPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);
    return (
        <ContainerDefault title="Order Detail">
            <HeaderDashboard
                title="Order Detail"
                description="Martfury Order Detail"
            />
            <section className="ps-dashboard">
                <div className="ps-section__left">
                    <div className="row">
                        <div className="col-md-4">
                            <ModuleOrderShippingInformation />
                        </div>
                        <div className="col-md-4">
                            <ModuleOrderBillingInformation />
                        </div>
                        <div className="col-md-4">
                            <ModuleOrderShippingInformation />
                        </div>
                    </div>
                    <div className="ps-card ps-card--track-order">
                        <div className="ps-card__header">
                            <h4>#ABD-235711</h4>
                        </div>
                        <div className="ps-card__content">
                            <div className="table-responsive">
                                <table className="table ps-table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="#">
                                                    Herschel Leather Duffle Bag
                                                    In Brown Color
                                                </a>
                                            </td>
                                            <td>1</td>
                                            <td>$29.59</td>
                                            <td>$29.59</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#">
                                                    Herschel Leather Duffle Bag
                                                    In Brown Color
                                                </a>
                                            </td>
                                            <td>1</td>
                                            <td>$29.59</td>
                                            <td>$29.59</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#">
                                                    Herschel Leather Duffle Bag
                                                    In Brown Color
                                                </a>
                                            </td>
                                            <td>1</td>
                                            <td>$29.59</td>
                                            <td>$29.59</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <strong>Sub Total:</strong>
                                            </td>
                                            <td>
                                                <strong>$199.90</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <strong>
                                                    Shipping Charge:
                                                </strong>
                                            </td>
                                            <td>
                                                <strong>$24.00</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <strong>Estimated:</strong>
                                            </td>
                                            <td>
                                                <strong>$12.00</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <strong>Total:</strong>
                                            </td>
                                            <td>
                                                <strong>$211.00</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ps-section__right">
                    <div className="ps-card ps-card--track-order">
                        <div className="ps-card__header">
                            <h4>Track Order</h4>
                        </div>
                        <div className="ps-card__content">
                            <div className="ps-block--track-order">
                                <div className="ps-block__header">
                                    <div className="row">
                                        <div className="col-6">
                                            <figure>
                                                <figcaption>
                                                    Order ID:
                                                </figcaption>
                                                <p>#ABD-235711</p>
                                            </figure>
                                        </div>
                                        <div className="col-6">
                                            <figure>
                                                <figcaption>
                                                    Tracking ID:
                                                </figcaption>
                                                <p>21191818abs1</p>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-block__content">
                                    <div className="ps-block__timeline">
                                        <figure className="active">
                                            <figcaption>
                                                Order Placed
                                            </figcaption>
                                            <p>
                                                Sep 19, 2020{' '}
                                                <small>7:00am</small>
                                            </p>
                                        </figure>
                                        <figure className="active">
                                            <figcaption>Packed</figcaption>
                                            <p>
                                                Sep 19, 2020{' '}
                                                <small>10:00am</small>
                                            </p>
                                        </figure>
                                        <figure className="active">
                                            <figcaption>Shipped</figcaption>
                                            <p>
                                                Sep 19, 2020{' '}
                                                <small>4:00pm</small>
                                            </p>
                                        </figure>
                                        <figure>
                                            <figcaption>Delivered</figcaption>
                                            <p>
                                                Estimated delivery within 1 day
                                            </p>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(OrderDetailPage);
