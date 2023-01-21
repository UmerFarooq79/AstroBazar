import React from 'react';
import Link from 'next/link';
const Links = {
    consumerElectric: [
        {
            text: 'Air Conditioners',
            url: '/shop',
        },
        {
            text: 'Audios & Theaters',
            url: '/shop',
        },
        {
            text: 'Car Electronics',
            url: '/shop',
        },
        {
            text: 'Office Electronics',
            url: '/shop',
        },
        {
            text: 'TV Televisions',
            url: '/shop',
        },
        {
            text: 'Washing Machines',
            url: '/shop',
        },
    ],
    clothingAndApparel: [
        {
            text: 'Printers',
            url: '/shop',
        },
        {
            text: 'Projectors',
            url: '/shop',
        },
        {
            text: 'Scanners',
            url: '/shop',
        },
        {
            text: 'Store & Business',
            url: '/shop',
        },
        {
            text: '4K Ultra HD TVs',
            url: '/shop',
        },
        {
            text: 'LED TVs',
            url: '/shop',
        },
        {
            text: 'OLED TVs',
            url: '/shop',
        },
    ],
    gardenAndKitchen: [
        {
            text: 'Cookware',
            url: '/shop',
        },
        {
            text: 'Decoration',
            url: '/shop',
        },
        {
            text: 'Furniture',
            url: '/shop',
        },
        {
            text: 'Garden Tools',
            url: '/shop',
        },
        {
            text: 'Garden Equipments',
            url: '/shop',
        },
        {
            text: 'Powers And Hand Tools',
            url: '/shop',
        },
        {
            text: 'Utensil & Gadget',
            url: '/shop',
        },
    ],
    healthAndBeauty: [
        {
            text: 'Hair Care',
            url: '/shop',
        },
        {
            text: 'Decoration',
            url: '/shop',
        },
        {
            text: 'Makeup',
            url: '/shop',
        },
        {
            text: 'Body Shower',
            url: '/shop',
        },
        {
            text: 'Skin Care',
            url: '/shop',
        },
        {
            text: 'Cologine',
            url: '/shop',
        },
        {
            text: 'Perfume',
            url: '/shop',
        },
    ],
    jewelryAndWatch: [
        {
            text: 'Necklace',
            url: '/shop',
        },
        {
            text: 'Pendant',
            url: '/shop',
        },
        {
            text: 'Diamond Ring',
            url: '/shop',
        },
        {
            text: 'Sliver Earing',
            url: '/shop',
        },
        {
            text: 'Leather Watcher',
            url: '/shop',
        },
        {
            text: 'Gucci',
            url: '/shop',
        },
    ],
    computerAndTechnology: [
        {
            text: 'Desktop PC',
            url: '/shop',
        },
        {
            text: 'Laptop',
            url: '/shop',
        },
        {
            text: 'Smartphones',
            url: '/shop',
        },
        {
            text: 'Tablet',
            url: '/shop',
        },
        {
            text: 'Game Controller',
            url: '/shop',
        },
        {
            text: 'Audio & Video',
            url: '/shop',
        },
        {
            text: 'Wireless Speaker',
            url: '/shop',
        },
    ],
};

const FooterLinks = () => (
    <div className="ps-footer__links">
        <p>
            <strong>Consumer Electric:</strong>
            {Links.consumerElectric.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Clothing &amp; Apparel:</strong>
            {Links.clothingAndApparel.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Home, Garden &amp; Kitchen:</strong>
            {Links.gardenAndKitchen.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Health &amp; Beauty:</strong>
            {Links.healthAndBeauty.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Jewelry &amp; Watches:</strong>
            {Links.jewelryAndWatch.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Computer &amp; Technologies:</strong>
            {Links.computerAndTechnology.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
    </div>
);

export default FooterLinks;
