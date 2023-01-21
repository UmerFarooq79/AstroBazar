import React from 'react';
import Link from 'next/link';
import { basePostUrl } from '~/repositories/Repository';
import LazyLoad from 'react-lazyload';
import moment from 'moment';

const PostGrid = ({ post }) => {
    let imageThumbnailView, categoriesView;
    if (post) {
        if (post.thumbnail !== null) {
            imageThumbnailView = (
                <LazyLoad>
                    <img
                        src={`${basePostUrl}${post.thumbnail.url}`}
                        alt="img"
                    />
                </LazyLoad>
            );
        }

        if (post.post_categories) {
            if (post.post_categories.length > 0) {
                categoriesView = post.post_categories.map((item) => (
                    <Link
                        href="/category/[slug]"
                        as={`/categories/${item.slug}`}
                        key={item.id}>
                        <a>{item.name}</a>
                    </Link>
                ));
            } else {
                categoriesView = (
                    <Link href="/blog">
                        <a>Others</a>
                    </Link>
                );
            }
        }
    }
    return (
        <article className="ps-post">
            <div className="ps-post__thumbnail">
                <Link href="/post/[pid]" as={`/post/${post.id}`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                {imageThumbnailView}
            </div>
            <div className="ps-post__content">
                <div className="ps-post__meta">{categoriesView}</div>
                <Link href="/post/[pid]" as={`/post/${post.id}`}>
                    <a className="ps-post__title">{post.name}</a>
                </Link>
                <p>
                    {moment(post.created_at).format('ll')} by
                    <Link href="/blog">
                        <a href="#"> drfurion</a>
                    </Link>
                </p>
            </div>
        </article>
    );
};

export default PostGrid;
