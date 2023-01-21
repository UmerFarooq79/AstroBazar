import React, { useEffect, useState } from 'react';
import PostRepository from '~/repositories/PostRepository';
import PostGrid from '~/components/elements/post/PostGrid';

const RelatedPosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        queries = {
            _limit: 4,
        };
        APIPosts = await PostRepository.getPosts(queries);
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
            return (
                <div className=" col-md-3 col-sm-6 col-6" key={item.id}>
                    <PostGrid post={item} />
                </div>
            );
        });
    }

    return (
        <div className="ps-related-posts">
            <h3>Related Posts</h3>
            <div className="row">{postItemsView}</div>
        </div>
    );
};

export default RelatedPosts;
