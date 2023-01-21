import React, { useEffect } from 'react';
import Link from 'next/link';
import ProductHorizontal from '~/components/elements/products/ProductHorizontal';
import useGetProducts from '~/hooks/useGetProducts';
import NewProducts from './newProducts';

const NewArrivals = ({ collectionSlug }) => {

    const [newProducts, setNewProducts] =  React.useState([])

    fetch('http://localhost:5000/Astro/products/')
    .then(response => response.json())
    .then((data)=>{
        setNewProducts(data)
    })

    console.log(newProducts);
    const { productItems, loading, getProductsByCollection } = useGetProducts();
    useEffect(() => {
        getProductsByCollection(collectionSlug);
    }, [collectionSlug]);

    // Views
    let productItemView;
    if (!loading) {
        if (newProducts && newProducts.length > 0) {
            productItemView = newProducts.map((item) => (
                <div
                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 "
                    key={item.id}>
                    <NewProducts 
                    thumbnail="http://localhost:5000/uploads/1673216039821 Blue_Tshirt.jpg"
                    title={item.title}
                    price={"Rs. " + item.price}
                    />
                </div>
            ));
        } else {
            productItemView = <p>No product found.</p>;
        }
    } else {
        productItemView = <p>Loading...</p>;
    }
    return (
        <div className="ps-product-list ps-new-arrivals">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>Hot New Arrivals</h3>
                    <ul className="ps-section__links">
                        <li>
                            <Link href="/shop">
                                <a>Technologies</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Electronic</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Furnitures</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Clothing & Apparel</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop?category=health-and-beauty">
                                <a>Health & Beauty</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>View All</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">
                    <div className="row">{productItemView}</div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
