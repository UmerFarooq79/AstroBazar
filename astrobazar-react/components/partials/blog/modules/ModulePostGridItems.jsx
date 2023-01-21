import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PostRepository from '~/repositories/PostRepository';
import PostGrid from '~/components/elements/post/PostGrid';
import CustomPagination from '~/components/elements/common/CustomPagination';

const ModulePostGridItems = ({ collectionSlug, columns }) => {
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
        <div className="ps-post-items">
            <div className="row">{postItemsView}</div>
            <CustomPagination />
        </div>
    );
};

export default ModulePostGridItems;
