import React, { useState } from 'react';
import Router from 'next/router';

const EditProduct = () => {
    // const router = useRouter();

    // State to store the values of the input fields
    const [products, setProducts] = React.useState([])
    const [formData, setFormData] = React.useState({
        title: '',
        desc: '',
        price: '',
        quantity: '',
        img: '',
    });

    const [Pid, setPid] = React.useState('');

    const id = '635d1da77ccbaf6af3b5c8dc';

    // Fetch the products from the API on component mount
    React.useEffect(() => {
        fetch('http://localhost:5000/Astro/seller/users/' + id)
            .then(response => response.json())
            .then(data => {
                // Update the products state with the API response
                setProducts(data)
                setPid(products[1].id)
               
            });
    }, []);
    

    const handleSubmit = (e) => {
        e.preventDefault();



        fetch('http://localhost:5000/Astro/seller/users/' + Pid, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }).then(response => response.json())
            .then((data) => {
             if (data["title"]){
                alert("Product Updated Successfuly ")
                Router.push('/products');
             }else{
                alert("Coulud not update, Try Again")
             }
})
    }

const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
};

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">
            Title:
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
        </label>
        <br />
        <label htmlFor="description">
            Description:
            <textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
            />
        </label>
        <br />
        <label htmlFor="quantity">
            Quantity:
            <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
            />
        </label>
        <br />
        <label htmlFor="price">
            Price:
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
            />
        </label>
        <br />
        <label htmlFor="text">
            Image:
            <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleChange}
            />
        </label>
        <br />
        <button type="submit">Edit</button>
    </form>
);
};

export default EditProduct;

