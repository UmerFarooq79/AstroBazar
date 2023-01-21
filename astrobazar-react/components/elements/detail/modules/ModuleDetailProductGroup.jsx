import React from 'react';

const ModuleDetailProductGroup = () => {
    return (
        <div className="ps-product__groupped">
            <div className="table-responsive">
                <table className="table ps-table--product-groupped">
                    <tbody>
                        <tr>
                            <td>
                                <a className="ps-btn" href="#">
                                    Read more
                                </a>
                            </td>
                            <td>
                                <a
                                    className="title"
                                    href="product-default.html">
                                    Aroma Rice Cooker
                                </a>
                            </td>
                            <td>
                                <p>$275.50</p>
                                <p>
                                    Status:
                                    <span className="ps-tag--out-stock">
                                        Out of stock
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="ps-btn" href="#">
                                    Read more
                                </a>
                            </td>
                            <td>
                                <a
                                    className="title"
                                    href="product-default.html">
                                    Korea Fabric Chair In Brown Color
                                </a>
                            </td>
                            <td>
                                <p> $320.54</p>
                                <p>
                                    Status:
                                    <span className="ps-tag--out-stock">
                                        Out of stock
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="ps-btn" href="#">
                                    Read more
                                </a>
                            </td>
                            <td>
                                <a
                                    className="title"
                                    href="product-default.html">
                                    Set 14-Piece Knife From KichiKit
                                </a>
                            </td>
                            <td>
                                <p>$85.62</p>
                                <p>
                                    Status:
                                    <span className="ps-tag--out-stock">
                                        Out of stock
                                    </span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ModuleDetailProductGroup;
