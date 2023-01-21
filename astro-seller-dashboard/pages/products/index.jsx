import React, { useEffect } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import Pagination from '~/components/elements/basic/Pagination';
import TableProjectItems from '~/components/shared/tables/TableProjectItems';
import { Select } from 'antd';
import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const { Option } = Select;
const ProductPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);


    return (
        <ContainerDefault title="Products">
            <HeaderDashboard
                title="Products"
                description="AstroBazar Product Listing "
            />
            <section className="ps-items-listing">
                <div className="ps-section__actions">
                    <Link href="/products/create-product">
                        <a className="ps-btn success">
                            <i className="icon icon-plus mr-2" />
                            New Product
                        </a>
                    </Link>
                </div>
                <div className="ps-section__header">
                    <div className="ps-section__filter">
                        <form
                            className="ps-form--filter"
                            action="index.html"
                            method="get">
                            <div className="ps-form__left">
                                <div className="form-group">
                                    <Select
                                        placeholder="Select Category"
                                        className="ps-ant-dropdown"
                                        listItemHeight={20}>
                                        <Option value="clothing-and-apparel">
                                            Clothing & Apparel
                                        </Option>
                                        <Option value="garden-and-kitchen">
                                            Garden & Kitchen
                                        </Option>
                                    </Select>
                                </div>
                                <div className="form-group">
                                    <Select
                                        placeholder="Select Category"
                                        className="ps-ant-dropdown"
                                        listItemHeight={20}>
                                        <Option value="simple-product">
                                            Simple Product
                                        </Option>
                                        <Option value="groupped-product">
                                            Groupped product
                                        </Option>
                                    </Select>
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
                    <div className="ps-section__search">
                        <form
                            className="ps-form--search-simple"
                            action="index.html"
                            method="get">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search product"
                            />
                            <button>
                                <i className="icon icon-magnifier"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="ps-section__content">
                    <TableProjectItems />
                </div>
                {/* <div className="ps-section__footer">
                    <Pagination />
                </div> */}
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(ProductPage);
