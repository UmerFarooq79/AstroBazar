import React from 'react';
import Link from 'next/link';
import DemoItem from '~/components/elements/DemoItem';

const DemoLayouts = () => {
    const pages = [
        {
            text: 'Marketplace Fullwidth',
            image: '/static/img/demos/homepage/fullwidth.jpg',
            link: '/',
        },
        {
            text: 'Auto Parts',
            image: '/static/img/demos/homepage/auto-part.jpg',
            link: '/home/auto-part',
        },
        {
            text: 'Marketplace V1',
            image: '/static/img/demos/homepage/market-1.jpg',
            link: '/home/market-place',
        },
        {
            text: 'Marketplace V2',
            image: '/static/img/demos/homepage/market-2.jpg',
            link: '/home/market-place-2',
        },
        {
            text: 'Marketplace V3',
            image: '/static/img/demos/homepage/market-3.jpg',
            link: '/home/market-place-3',
        },
        {
            text: 'Marketplace V4',
            image: '/static/img/demos/homepage/market-4.jpg',
            link: '/home/market-place-4',
        },
        {
            text: 'Electronic',
            image: '/static/img/demos/homepage/electronic.jpg',
            link: '/home/electronic',
        },
        {
            text: 'Furniture',
            image: '/static/img/demos/homepage/furniture.jpg',
            link: '/home/furniture',
        },
        {
            text: 'Organic',
            image: '/static/img/demos/homepage/organic.jpg',
            link: '/home/organic',
        },
        {
            text: 'Technology',
            image: '/static/img/demos/homepage/technology.jpg',
            link: '/home/technology',
        },
    ];

    return (
        <div className="ps-section__items">
            <div className="row">
                {pages.map(item => (
                    <div className="col-xl-2 col-lg-3" key={item.text}>
                        <DemoItem data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DemoLayouts;
