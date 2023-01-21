import React from 'react';
import Link from 'next/link';

const WidgetBlogRecentComments = () => {
    return (
        <aside className="widget widget--blog widget--recent-comments">
            <h3 className="widget__title">Recent Comments</h3>
            <div className="widget__content">
                <p>
                    <Link href="/blog">
                        <a className="author">drfurion </a>
                    </Link>
                    on{' '}
                    <Link href="/blog">
                        <a> Dashboard</a>
                    </Link>
                </p>
                <p>
                    <Link href="/blog">
                        <a className="author">logan </a>
                    </Link>
                    on{' '}
                    <Link href="/blog">
                        <a> Rayban Rounded Sunglass Brown Color</a>
                    </Link>
                </p>
                <p>
                    <Link href="/blog">
                        <a className="author">logan </a>
                    </Link>
                    on{' '}
                    <Link href="/blog">
                        <a> Sound Intone I65 Earphone White Version</a>
                    </Link>
                </p>
                <p>
                    <Link href="/blog">
                        <a className="author">logan</a>
                    </Link>
                    on
                    <Link href="/blog">
                        <a> Sleeve Linen Blend Caro Pane Shirt</a>
                    </Link>
                </p>
            </div>
        </aside>
    );
};

export default WidgetBlogRecentComments;
