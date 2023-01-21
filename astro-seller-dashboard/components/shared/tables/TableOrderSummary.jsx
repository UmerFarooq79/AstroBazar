import React from 'react';

const TableOrderSummary = () => (
    <div className="table-responsive">
        <table className="table ps-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Payment</th>
                    <th>Fullfillment</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#A580</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Unero Black Military</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge success">Paid</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment success">
                            delivered
                        </span>
                    </td>
                    <td>
                        <strong>Rs.5600</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#B260</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Marsh Speaker</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge gray">Unpaid</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment success">
                            delivered
                        </span>
                    </td>
                    <td>
                        <strong>Rs.5600</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#A583</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Lined Blend T-Shirt</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge success">Paid</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment warning">
                            In Progress
                        </span>
                    </td>
                    <td>
                        <strong>Rs.5160</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#A583</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>DJI MAcvic Quadcopter</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge gray">Unpaid</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment success">
                            delivered
                        </span>
                    </td>
                    <td>
                        <strong>Rs.1112</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#A112</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Black T-Shirt</strong>
                        </a>
                    </td>
                    <td>
                        <span className="ps-badge success">Paid</span>
                    </td>
                    <td>
                        <span className="ps-fullfillment danger">Cancel</span>
                    </td>
                    <td>
                        <strong>Rs.3000</strong>
                    </td>
                    <td>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-ellipsis"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default TableOrderSummary;
