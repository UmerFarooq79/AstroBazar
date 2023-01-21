import React from 'react';
import Link from 'next/link';

const WidgetBlogCategories = () => {
    const links = [
        'Business',
        'Entertaiment',
        'Fashion',
        'Life style',
        'Technology',
        'Others',
    ];
    //Views

    const categoriesView = links.map((item) => (
        <li key={item}>
            <Link href="/blog">
                <a>{item}</a>
            </Link>
        </li>
    ));

    return (
        <aside className="widget widget--blog widget--categories">
            <h3 className="widget__title">Categories</h3>
            <div className="widget__content">
                <ul>{categoriesView}</ul>
            </div>
        </aside>
    );
};

export default WidgetBlogCategories;
