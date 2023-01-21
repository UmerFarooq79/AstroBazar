import React from 'react';
import Link from 'next/link';

const Logo = ({ type }) => {
    let data;
    if (type === 'autopart') {
        data = {
            url: '/home/autopart',
            img: 'img/logo-autopart.png',
        };
    }
    else if (type === 'technology') {
        data = {
            url: '/home/technology',
            img: 'static/img/logo-technology.png',
        };
    }
    else if (type === 'technology') {
        data = {
            url: '/home/technology',
            img: 'static/img/logo-technology.png',
        };
    }
    else if (type === 'electronic') {
        data = {
            url: '/home/electronic',
            img: 'static/img/logo-electronic.png',
        };
    }
    else if (type === 'furniture') {
        data = {
            url: '/home/furniture',
            img: 'static/img/logo-furniture.png',
        };
    }
    else if (type === 'organic') {
        data = {
            url: '/home/organic',
            img: 'static/img/logo-organic.png',
        };
    }
    else {
        data = {
            url: '/',
            img: '/static/img/logo.png',
        };
    }
    return (
        <Link href={data.url}>
            <a className="ps-logo">
                <img src={data.img} alt="" />
            </a>
        </Link>
    );
};

export default Logo;
