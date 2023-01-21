import React, { Component } from 'react';
import Link from 'next/link';

class ElectronicTopCategories extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const homeCategories = [
            {
                thumbnail: '/static/img/categories/electronic/2.jpg',
                title: 'Tv Televisions',
                links: ['Smart TV', '4K Ultra HD TVs', 'LED TVs', 'OLED TVs', 'Accessories'],
            },
            {
                thumbnail: '/static/img/categories/electronic/4.jpg',
                title: 'Air Conditioners',
                links: [
                    'Type Hanging On Wall',
                    'Type Erect',
                    'Type Hanging On Celling',
                    'Accessories',
                ],
            },
            {
                thumbnail: '/static/img/categories/electronic/3.jpg',
                title: 'Washing Machine',
                links: [
                    'Type Hanging On Wall',
                    'Type Erect',
                    'Type Hanging On Celling',
                    'Accessories',
                ],
            },
            {
                thumbnail: '/static/img/categories/electronic/1.jpg',
                title: 'Audios & Theaters',
                links: [
                    'Speakers',
                    'Home Theater System',
                    'Wireless Audio',
                    'Headphone',
                    'Accessories',
                ],
            },
            {
                thumbnail: '/static/img/categories/electronic/6.jpg',
                title: 'Office Electronics',
                links: ['Printers', 'Store & Business', 'Scanners', 'Projectors', 'Phones'],
            },
            {
                thumbnail: '/static/img/categories/electronic/8.jpg',
                title: 'Phones',
                links: ['Printers', 'Store & Business', 'Scanners', 'Projectors', 'Phones'],
            },
        ];
        return (
            <div className="ps-top-categories">
                <div className="container">
                    <h3>Top categories of the month</h3>
                    <div className="row">
                        {homeCategories.map(category => (
                            <div className="col-md-4 col-sm-6 col-12 " key={category.title}>
                                <div className="ps-block--category-2">
                                    <div className="ps-block__thumbnail">
                                        <img src={category.thumbnail} alt="martfury" />
                                    </div>
                                    <div className="ps-block__content">
                                        <h4>{category.title}</h4>
                                        <ul>
                                            {category.links.map(link => (
                                                <li key={link}>
                                                    <Link href="/shop">
                                                        <a>{link}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ElectronicTopCategories;
