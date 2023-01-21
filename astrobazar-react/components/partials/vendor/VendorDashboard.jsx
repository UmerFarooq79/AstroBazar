import React from 'react';

const VendorDashboard = () => (
    <div className="ps-vendor-dashboard">
        <div className="container">
            <div className="ps-section__header">
                <h3>Vendor Dasboard Free</h3>
                <p>
                    Designed base on WC Vendor Plugin. Martfury also fully
                    comptatiable with other popular plugins as Dokan, YITH, etc
                    .Can help you turns your site into multi-vendor eCommerce
                    site.
                </p>
            </div>
            <div className="ps-section__content">
                <ul className="ps-section__links">
                    <li className="active">
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Order</a>
                    </li>
                    <li>
                        <a href="#">Setting</a>
                    </li>
                    <li>
                        <a href="#">View Store</a>
                    </li>
                </ul>
                <div className="ps-block--vendor-dashboard">
                    <div className="ps-block__header">
                        <h3>Sale Report</h3>
                    </div>
                    <div className="ps-block__content">
                        <form
                            className="ps-form--vendor-datetimepicker"
                            action="/"
                            method="get">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span
                                                className="input-group-text"
                                                id="time-from">
                                                From
                                            </span>
                                        </div>
                                        <input
                                            className="form-control ps-datepicker"
                                            aria-label="Username"
                                            aria-describedby="time-from"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span
                                                className="input-group-text"
                                                id="time-form">
                                                To
                                            </span>
                                        </div>
                                        <input
                                            className="form-control ps-datepicker"
                                            aria-label="Username"
                                            aria-describedby="time-to"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <button className="ps-btn">
                                        <i className="icon-sync2"></i> Update
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="table-responsive">
                            <table className="table ps-table ps-table--vendor">
                                <thead>
                                    <tr>
                                        <th>date</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Sold</th>
                                        <th>Commission</th>
                                        <th>Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nov 4, 2019</td>
                                        <td>
                                            <a href="#">
                                                Marshall Kilburn Portable
                                                Wireless Bluetooth Spe...
                                            </a>
                                        </td>
                                        <td>$235.35</td>
                                        <td>25</td>
                                        <td>$2940.00</td>
                                        <td>24.5%</td>
                                    </tr>
                                    <tr>
                                        <td>Nov 4, 2019</td>
                                        <td>
                                            <a href="#">
                                                Unero Military Classical
                                                Backpack
                                            </a>
                                        </td>
                                        <td>$42.35</td>
                                        <td>10</td>
                                        <td>$211.00</td>
                                        <td>17.5%</td>
                                    </tr>
                                    <tr>
                                        <td>Nov 4, 2019</td>
                                        <td>
                                            <a href="#">
                                                Sleeve Linen Blend Caro Pana
                                                T-Shirt
                                            </a>
                                        </td>
                                        <td>$23.35</td>
                                        <td>80</td>
                                        <td>$935.00</td>
                                        <td>62.5%</td>
                                    </tr>
                                    <tr>
                                        <td>Nov 30, 2019</td>
                                        <td>
                                            <a href="#">
                                                Harman Kardon Onyx Studio 2.0
                                            </a>
                                        </td>
                                        <td>$299.35</td>
                                        <td>14</td>
                                        <td>$2095.00</td>
                                        <td>62.5%</td>
                                    </tr>
                                    <tr>
                                        <td>Nov 30, 2019</td>
                                        <td>
                                            <a href="#">
                                                Korea Long Sofa Fabric In Blu
                                                Navy Color
                                            </a>
                                        </td>
                                        <td>$299.35</td>
                                        <td>5</td>
                                        <td>$6095.00</td>
                                        <td>62.5%</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <strong>Total</strong>
                                        </td>
                                        <td>
                                            <strong>124 Sale</strong>
                                        </td>
                                        <td colSpan="2">
                                            <strong>$12.104.725</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="ps-block--vendor-dashboard">
                    <div className="ps-block__header">
                        <h3>Recent Orders</h3>
                    </div>
                    <div className="ps-block__content">
                        <div className="table-responsive">
                            <table className="table ps-table ps-table--vendor">
                                <thead>
                                    <tr>
                                        <th>date</th>
                                        <th>Order ID</th>
                                        <th>Shipping</th>
                                        <th>Total Price</th>
                                        <th>Status</th>
                                        <th>Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nov 4, 2019</td>
                                        <td>
                                            <a href="#">MS46891357</a>
                                        </td>
                                        <td>$00.00</td>
                                        <td>$295.47</td>
                                        <td>
                                            <a href="#">Open</a>
                                        </td>
                                        <td>
                                            <a href="#">View Detail</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nov 2, 2017</td>
                                        <td>
                                            <a href="#">AP47305441</a>
                                        </td>
                                        <td>$00.00</td>
                                        <td>$25.47</td>
                                        <td>Close</td>
                                        <td>
                                            <a href="#">View Detail</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default VendorDashboard;
