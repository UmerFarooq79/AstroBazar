import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PostRepository from '~/repositories/PostRepository';
import PostGrid from '~/components/elements/post/PostGrid';
import CustomPagination from '~/components/elements/common/CustomPagination';

const BlogItemsGridView = ({ collectionSlug, columns }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug !== undefined) {
            queries = {
                slug_eq: collectionSlug,
            };
            APIPosts = await PostRepository.getPostsByCollectionSlug(queries);
        } else {
            queries = {
                _limit: 6,
            };
            APIPosts = await PostRepository.getPosts(queries);
        }
        console.log(APIPosts);

        if (APIPosts) {
            setTimeout(function () {
                setLoading(false);
            }, 200);
            setPosts(APIPosts);
            return APIPosts;
        } else {
            setPosts(null);
            return null;
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    let postItemsView;
    if (!loading && posts) {
        postItemsView = posts.map((item) => {
            if (columns === 4) {
                return (
                    <div className=" col-md-4 col-sm-6" key={item.id}>
                        <PostGrid post={item} />
                    </div>
                );
            } else if (columns === 4) {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                        <PostGrid post={item} />
                    </div>
                );
            } else {
                return (
                    <div className="col-md-6" key={item.id}>
                        <PostGrid post={item} />
                    </div>
                );
            }
        });
    }

    return (
        <div className="ps-blog">
            <div className="ps-blog__header">
                <ul className="ps-list--blog-links">
                    <li className="active">
                        <Link href="/blog">
                            <a>All</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Life Style</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Technology</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Entertaiment</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Business</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Others</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Fashion</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="ps-blog__content">
                <div className="row">
                    {postItemsView}
                    {/*  {posts.length > 0 &&
                        posts.map((post) => {
                            return (
                                <div
                                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                                    key={post.id}>
                                    <PostGrid data={post} />
                                </div>
                            );
                        })}*/}
                </div>
                <CustomPagination />
            </div>
        </div>
    );
};

export default BlogItemsGridView;
