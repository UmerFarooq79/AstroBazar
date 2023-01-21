import React from 'react';

import RelatedPosts from '~/components/partials/post/RelatedPosts';
import PostComments from '~/components/partials/post/PostComments';
import PostDetail from '~/components/elements/post/PostDetail';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';

const PostDetailScreen2 = () => {
    return (
        <PageContainer footer={<FooterDefault />} title="Post Detail 2">
            <PostDetail />
            <div className="container">
                <RelatedPosts />
                <PostComments />
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default PostDetailScreen2;
