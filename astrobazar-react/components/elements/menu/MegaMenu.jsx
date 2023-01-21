import React from 'react';
import Link from 'next/link';

const MegaMenu = ({ source }) => {
    let megaContentView;
    if (source) {
        megaContentView = source.megaContent.map((item) => (
            <div className="mega-menu__column" key={item.heading}>
                <h4>{item.heading}</h4>
                <ul className="mega-menu__list">
                    {item.megaItems.map((subItem) => (
                        <li key={subItem.text}>
                            <Link href={subItem.url} as={subItem.url}>
                                <a>{subItem.text}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    }
    return (
        <li className="menu-item-has-children has-mega-menu">
            <Link href={source.url !== '' ? source.url : '/'}>
                <a>
                    {source.icon && <i className={source.icon}></i>}
                    {source.text}
                </a>
            </Link>
            <div className="mega-menu">{megaContentView}</div>
        </li>
    );
};

export default MegaMenu;
