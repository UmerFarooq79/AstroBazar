import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PostRepository from '~/repositories/PostRepository';

const WidgetBlogRecentPosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, responseData;
        queries = {
            _limit: 4,
        };
        responseData = await PostRepository.getPosts(queries);

        if (responseData) {
            setTimeout(function () {
                setLoading(false);
            }, 200);
            setPosts(responseData);
            return responseData;
        } else {
            setPosts(null);
            return null;
        }
    }
    useEffect(() => {
        getPosts();
    }, []);

    // Views
    let postsView;
    if (!loading) {
        if (posts && posts.length > 0) {
            postsView = posts.map((item) => (
                <Link href="/post/[pid]" as={`/post/${item.id}`}>
                    <a>{item.title}</a>
                </Link>
            ));
        }
    } else {
        postsView = <p>Loading...</p>;
    }

    return (
        <aside className="widget widget--blog widget--recent-post">
            <h3 className="widget__title">Recent Posts</h3>
            <div className="widget__content">{postsView}</div>
        </aside>
    );
};

export default WidgetBlogRecentPosts;
