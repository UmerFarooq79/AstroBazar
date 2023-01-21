import React, { useEffect, useState, useRef } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import router, { useRouter } from 'next/router';
import axios from 'axios';


const CreateProductPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    const [pFormData, setPFormData] = React.useState({
        title: '',
        price: '',
        quantity: '',
        desc:'',
        img: null


    });



    const id = '635d1da77ccbaf6af3b5c8dc';  

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(pFormData.img);
        const formData = new FormData();

        // const reader = new FileReader();
        // reader.onload = function(e) {
        //   formData.append('myFile', e.target.result, pFormData.img.name);
        // };
        formData.append('myFile', pFormData.img, pFormData.img.name)
        // reader.readAsBinaryString(pFormData.img);
        formData.append('title', pFormData.title)
        formData.append('price', pFormData.price)
        formData.append('quantity', pFormData.quantity)
        formData.append('desc', pFormData.desc)
        
        fetch('http://localhost:5000/Astro/seller/users/addProduct/'+id, {
        method: 'POST',
        body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
        // Handle the response from the server here
        console.log(data);
        if(data.success){
         alert('Product Added Successfully')   
         router.push('/products')

        }
        else {
            alert('something went wrong')
        }
        });
        };
        const handleChange = (event) => {
            setPFormData({
            ...pFormData,    
            [event.target.name]: event.target.value
            });
            };

        const handleFileChange = (e) =>{
            console.log(e.target.files[0]);
            setPFormData({...pFormData, 
            img: e.target.files[0]
            })
        
  };

        
    return (
        <ContainerDefault title="Create new product">
            <HeaderDashboard
                title="Create Product"
                description="AstroBazar Create New Product "
            />
            <section className="ps-new-item">
                <form onSubmit={handleSubmit}
                    className="ps-form ps-form--new-product"
                    action=""
                    method="get">
                    <div className="ps-form__content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>General</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                Product Name<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name='title'
                                                placeholder="Enter product name..."
                                                value={pFormData.title}
                                                onChange={handleChange}
                                            />
                                        </div>
                            
                                        <div className="form-group">
                                            <label>
                                                Product Summary<sup>*</sup>
                                            </label>
                                            <text-area
                                                className="form-control"
                                                rows="6"
                                                placeholder="Enter product description..."></text-area>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Price<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                placeholder=""
                                                name='price'
                                                value={pFormData.price}
                                                onChange={handleChange}
                                            />
                                        </div>
                                
                                        <div className="form-group">
                                            <label>
                                                Sale Quantity<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                name='quantity'
                                                placeholder=""
                                                value={pFormData.quantity}
                                                onChange={handleChange}
                                            />
                                        </div>
                                     
                                        <div className="form-group">
                                            <label>
                                                Product Description<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                rows="6"
                                                name="desc"
                                                value={pFormData.desc}
                                                onChange={handleChange}
                                                    >
                                                    
                                                </input>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>Product Images</figcaption>
                                    <div className="ps-block__content">
                                       
                                        <div className="form-group">
                                            <label>Product Gallery</label>
                                            <div className="form-group--nest">
                                                <input
                                                    name='img'
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    />
                                            </div>
                                            
                                        </div>
                        
                                        <div className="form-group">
                                            <label>Video (optional)</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter video URL"
                                            />
                                        </div>
                                    </div>
                                </figure>
                                <figure className="ps-block--form-box">
                                    <figcaption>Inventory</figcaption>
                                    <div className="ps-block__content">
                                       
                                        <div className="form-group form-group--select">
                                            <label>Status</label>
                                            <div className="form-group__content">
                                                <select
                                                    className="ps-select"
                                                    title="Status">
                                                    <option value="1">
                                                        Status 1
                                                    </option>
                                                    <option value="2">
                                                        Status 2
                                                    </option>
                                                    <option value="3">
                                                        Status 3
                                                    </option>
                                                    <option value="4">
                                                        Status 4
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <figure className="ps-block--form-box">
                                    <figcaption>Meta</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group form-group--select">
                                            <label>Brand</label>
                                            <div className="form-group__content">
                                                <select
                                                    className="ps-select"
                                                    title="Brand">
                                                    <option value="1">
                                                        Brand 1
                                                    </option>
                                                    <option value="2">
                                                        Brand 2
                                                    </option>
                                                    <option value="3">
                                                        Brand 3
                                                    </option>
                                                    <option value="4">
                                                        Brand 4
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Tags</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="ps-form__bottom">
                        <a
                            className="ps-btn ps-btn--black"
                            href="products.html">
                            Back
                        </a>
                        <button className="ps-btn ps-btn--gray">Cancel</button>
                        <button type='submit' className="ps-btn">Submit</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreateProductPage);
