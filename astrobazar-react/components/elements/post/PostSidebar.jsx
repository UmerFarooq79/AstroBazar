import React from 'react';
import Link from 'next/link';

const PostGrid = ({ data }) => {
    return (
        <article className="ps-post">
            <div className="ps-post__thumbnail">
                <Link href="/post/[pid]" as={`/post/${data.id}`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                <img src={data.thumbnail} alt="martfury" />
                {data && data.badge ? (
                    <div className="ps-post__badge">
                        <i className={data.badge}></i>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div className="ps-post__content">
                <div className="ps-post__meta">
                    {data.categories.map(category => (
                        <Link href="/shop" key={category.id + category.text}>
                            <a>{category.text}</a>
                        </Link>
                    ))}
                </div>
                <Link href="/post/[pid]" as={`/post/${data.id}`}>
                    <a className="ps-post__title">{data.title}</a>
                </Link>
                <p>
                    December 17, 2017 by
                    <Link href="/blog">
                        <a href="#"> drfurion</a>
                    </Link>
                </p>
            </div>
        </article>
    );
};

export default PostGrid;
