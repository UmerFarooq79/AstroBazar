import React from 'react';
import Link from 'next/link';

const AutopartCategories = () => {
    const autoPartCategories = [
        {
            thumbnail: '/static/img/categories/home-2/1.jpg',
            title: 'INTERIOR',
            links: ['Seats', 'Steering Wheels', 'Dash Cover', 'Floor Mats'],
        },
        {
            thumbnail: '/static/img/categories/home-2/2.jpg',
            title: 'EXTERIOR',
            links: [
                'Running Boards',
                'Custom Grilles',
                'Off-Road Bumpers',
                'Body Kits',
            ],
        },
        {
            thumbnail: '/static/img/categories/home-2/3.jpg',
            title: 'WHEELS & TIRES',
            links: ['Custom Wheels', 'Tires', 'Factory Wheels', 'Center Caps'],
        },
        {
            thumbnail: '/static/img/categories/home-2/4.jpg',
            title: 'PERFORMANCE',
            links: [
                'Exhausted System',
                'Brakes',
                'Performance Chips',
                'Starting & Charging',
            ],
        },
        {
            thumbnail: '/static/img/categories/home-2/5.jpg',
            title: 'BODY PARTS',
            links: ['Mirrors', 'Hoods', 'Bumpers', 'Quater Panels'],
        },
        {
            thumbnail: '/static/img/categories/home-2/6.jpg',
            title: 'LIGHTING',
            links: ['Headlight', 'Off-Road Light', 'WSingnal Light'],
        },
    ];
    return (
        <section className="ps-top-categories">
            <div className="container">
                <div className="ps-section__header">
                    <h3>TOP CATEGORIES OF THE MONTH</h3>
                </div>
                <div className="ps-section__content"></div>
                <div className="row align-content-lg-stretch">
                    {autoPartCategories.map((category) => (
                        <div
                            className="col-md-4 col-sm-6 col-12"
                            key={category.title}>
                            <div
                                className="ps-block--category-2 ps-block--category-auto-part"
                                data-mh="categories">
                                <div className="ps-block__thumbnail">
                                    <img
                                        src={category.thumbnail}
                                        alt="martfury"
                                    />
                                </div>
                                <div className="ps-block__content">
                                    <h4>{category.title}</h4>
                                    <ul>
                                        {category.links &&
                                            category.links.map((link) => (
                                                <li key={link}>
                                                    <Link href="/shop">
                                                        <a>{link}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        <li className="more">
                                            <Link href="/shop">
                                                <a>
                                                    More
                                                    <i className="icon-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AutopartCategories;
