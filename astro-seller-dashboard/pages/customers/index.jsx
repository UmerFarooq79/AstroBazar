import React, { useEffect } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import Pagination from '~/components/elements/basic/Pagination';
import TableCustomerItems from '~/components/shared/tables/TableCustomerItems';
import FormSearchSimple from '~/components/shared/forms/FormSearchSimple';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const CustomersPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);
    return (
        <ContainerDefault title="Customers">
            <HeaderDashboard
                title="Customers"
                description="Martfury Customer Listing"
            />
            <section className="ps-items-listing">
                <div className="ps-section__header simple">
                    <div className="ps-section__filter">
                        <FormSearchSimple />
                    </div>
                    <div className="ps-section__actions">
                        <a className="ps-btn success" href="#">
                            <i className="icon icon-plus mr-2"></i>Add Customer
                        </a>
                    </div>
                </div>
                <div className="ps-section__content">
                    <TableCustomerItems />
                </div>
                <div className="ps-section__footer">
                    <p>Show 10 in 30 items.</p>
                    <Pagination />
                </div>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CustomersPage);
