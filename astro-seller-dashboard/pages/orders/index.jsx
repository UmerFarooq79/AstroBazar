import React, { useEffect } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import TableOrdersItems from '~/components/shared/tables/TableOrdersItems';
import Pagination from '~/components/elements/basic/Pagination';
import { Select } from 'antd';
import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const { Option } = Select;
const OrdersPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);
    return (
        <ContainerDefault>
            <HeaderDashboard
                title="Orders"
                description="Martfury Orders Listing"
            />
            <section className="ps-items-listing">
                <div className="ps-section__header simple">
                    <div className="ps-section__filter">
                        <form
                            className="ps-form--filter"
                            action="index.html"
                            method="get">
                            <div className="ps-form__left">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search..."
                                    />
                                </div>
                                <div className="form-group">
                                    <Select
                                        placeholder="Status"
                                        className="ps-ant-dropdown"
                                        listItemHeight={20}>
                                        <Option value="active">Active</Option>
                                        <Option value="in-active">
                                            InActive
                                        </Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="ps-form__right">
                                <button className="ps-btn ps-btn--gray">
                                    <i className="icon icon-funnel mr-2"></i>
                                    Filter
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="ps-section__actions">
                        <Link href="/products/create-product">
                            <a className="ps-btn success">
                                <i className="icon icon-plus mr-2"></i>New Order
                            </a>
                        </Link>
                        <a
                            className="ps-btn ps-btn--gray"
                            href="new-order.html">
                            <i className="icon icon-download2 mr-2"></i>Export
                        </a>
                    </div>
                </div>
                <div className="ps-section__content">
                    <TableOrdersItems />
                </div>
                <div className="ps-section__footer">
                    <p>Show 10 in 30 items.</p>
                    <Pagination />
                </div>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(OrdersPage);
