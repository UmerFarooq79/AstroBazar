import React, { Component } from 'react';

import Link from 'next/link';

class FurnitureShopByRoom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const furnitureRoom = [
            {
                imagePath: '/static/img/categories/furniture/room-1.png',
                title: 'Living Rooom',
            },
            {
                imagePath: '/static/img/categories/furniture/room-2.png',
                title: 'Bedroom',
            },
            {
                imagePath: '/static/img/categories/furniture/room-3.png',
                title: 'Dinning Room',
            },
            {
                imagePath: '/static/img/categories/furniture/room-4.png',
                title: 'Kitchen',
            },
            {
                imagePath: '/static/img/categories/furniture/room-5.png',
                title: 'Bathroom',
            },
            {
                imagePath: '/static/img/categories/furniture/room-6.png',
                title: "Kid's Room",
            },
            {
                imagePath: '/static/img/categories/furniture/room-7.png',
                title: 'Patio & Outdoor',
            },
            {
                imagePath: '/static/img/categories/furniture/room-8.png',
                title: 'Office',
            },
        ];
        return (
            <div className="ps-section--furniture ps-home-shop-by-room">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Shop By Room</h3>
                    </div>
                    <div className="ps-section__content">
                        <div className="row">
                            {furnitureRoom.map(room => (
                                <div
                                    className="col-xl-3 col-md-4 col-sm-6 col-12"
                                    key={room.title}>
                                    <div className="ps-block--category-room">
                                        <div className="ps-block__thumbnail">
                                            <Link href="/shop">
                                                <a>
                                                    <img
                                                        src={room.imagePath}
                                                        alt="martfury"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="ps-block__content">
                                            <Link href="/shop">
                                                <a>{room.title}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FurnitureShopByRoom;
