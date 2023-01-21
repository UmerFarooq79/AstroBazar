import React from 'react';
import DropdownAction from '~/components/elements/basic/DropdownAction';

const TableProjectItems = () => {

    const [products, setProducts] = React.useState([]);
    const [Pid, setPid] = React.useState('');

    const id = '635d1da77ccbaf6af3b5c8dc';

    // Fetch the products from the API on component mount
    React.useEffect(() => {
        fetch('http://localhost:5000/Astro/seller/users/'+id)
            .then(response => response.json())
            .then(data => {
                // Update the products state with the API response
                setProducts(data);
                setPid(data.id)
            });
    }, []);

    const tableItems = products.map((item, index) => {
        let badgeView;
        
            badgeView = <span className="ps-badge success">{item.quantity}</span>;
        
        return (
            <tr key={item.sku}>
                <td>{index + 1}</td>
                <td>
                    <a href="#">
                        <strong>{item.title}</strong>
                    </a>
                </td>
                {/* <td>{item.sku}</td> */}
                <td>{badgeView}</td>
                <td>
                    <strong>{item.price}</strong>
                </td>
                <td>
                    <p className="ps-item-categories">
                        {item.categories}
                    </p>
                </td>
                {/* <td>{item.date}</td> */}
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
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Categories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </table>
        </div>
    );
};

export default TableProjectItems;
