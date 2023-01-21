import React from 'react';

const TechnologyTopCategories = () => {
    const topCategories = [
        {
            imagePath: '/static/img/categories/technology/1.jpg',
            title: 'Smartphone',
        },
        {
            imagePath: '/static/img/categories/technology/2.jpg',
            title: 'Tables',
        },
        {
            imagePath: '/static/img/categories/technology/3.jpg',
            title: 'Laptops',
        },
        {
            imagePath: '/static/img/categories/technology/4.jpg',
            title: 'Sounds',
        },
        {
            imagePath: '/static/img/categories/technology/5.jpg',
            title: 'Technology Toys',
        },
        {
            imagePath: '/static/img/categories/technology/6.jpg',
            title: 'Accessories',
        },
    ];
    return (
        <section className="ps-top-categories">
            <div className="container">
                <h3>Top categories of the month</h3>
                <div className="row">
                    {topCategories.map((category) => (
                        <div
                            className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 "
                            key={category.title}>
                            <div
                                className="ps-block--category"
                                data-mh="categories">
                                <div className="ps-block__thumbnail">
                                    <img
                                        src={category.imagePath}
                                        alt="martfury"
                                    />
                                </div>
                                <div className="ps-block__content">
                                    <p>{category.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologyTopCategories;
