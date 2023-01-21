import React from 'react';
import DropdownAction from '~/components/elements/basic/DropdownAction';

const TableCustomerItems = () => {
    const customers = [
        {
            name: 'Jenny Simmonds',
            phone: '(+92) 211-32-1145',
            balance: 'Rs. 650',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Ammara Molloy',
            phone: '(+92) 916-971-217',
            balance: 'Rs. 430',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Anisa Forster',
            phone: '(+92) 319-176-113',
            balance: 'Rs. 1250',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Hashir Wilson',
            phone: '(+92) 393-112-298',
            balance: 'Rs. 270',
            orders: '10',
            status: 'false',
        },
        {
            name: 'Grover Sampson',
            phone: '(+92) 393-872-137',
            balance: 'Rs. 3500',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Nelson Mckeown',
            phone: '(+92) 393-872-998',
            balance: 'Rs. 990',
            orders: '10',
            status: 'false',
        },
        {
            name: 'Zunaira Akhtar',
            phone: '(+92) 393-872-145',
            balance: 'Rs. 1100',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Natan Kramer',
            phone: '(+92) 293-872-145',
            balance: 'Rs. 1250',
            orders: '10',
            status: 'false',
        },
        {
            name: 'Jesse Pollard',
            phone: '(+92) 291-32-145',
            balance: 'Rs. 230',
            orders: '10',
            status: 'true',
        },
    ];
    const tableItemsView = customers.map((item, index) => {
        let badgeView;

        if (item.status) {
            badgeView = <span className="ps-badge success">active</span>;
        } else {
            badgeView = <span className="ps-badge gray">deactive</span>;
        }

        return (
            <tr key={index}>
                <td>{index}</td>
                <td>
                    <strong>{item.name}</strong>
                </td>
                <td>{item.phone}</td>
                <td>{item.balance}</td>
                <td>{item.orders}</td>
                <td>{badgeView}</td>
                <td>
                    <DropdownAction />
                </td>
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Balances</th>
                        <th>Total orders</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{tableItemsView}</tbody>
            </table>
        </div>
    );
};

export default TableCustomerItems;
