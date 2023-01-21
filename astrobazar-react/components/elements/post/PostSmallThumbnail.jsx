import React from 'react';
import Link from 'next/link';
import { basePostUrl } from '~/repositories/Repository';
import LazyLoad from 'react-lazyload';
import moment from 'moment';

const PostSmallThumbnail = ({ post }) => {
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

        if (post.categories) {
            if (post.categories.length > 0) {
                categoriesView = post.categories.map((item) => (
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
        <article className="ps-post ps-post--small-thumbnail">
            <div className="ps-post__thumbnail">
                <Link href="/post/[pid]" as={`/post/${post.id}`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                {imageThumbnailView}
            </div>
            <div className="ps-post__content">
                <div className="ps-post__top">
                    <div className="ps-post__meta">{categoriesView}</div>
                    <Link href="/post/[pid]" as={`/post/${post.id}`}>
                        <a className="ps-post__title">{post.title}</a>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, dolor siterim consectetur
                        adipiscing elit. Phasellus duio faucibus est sed…
                    </p>
                </div>
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

export default PostSmallThumbnail;
