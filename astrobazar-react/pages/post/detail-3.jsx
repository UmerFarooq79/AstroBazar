import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WidgetBlogSearch from '~/components/shared/widgets/WidgetBlogSearch';
import WidgetBlogCategories from '~/components/shared/widgets/WidgetBlogCategories';
import WidgetBlogRecentPosts from '~/components/shared/widgets/WidgetBlogRecentPosts';
import WidgetBlogRecentComments from '~/components/shared/widgets/WidgetBlogRecentComments';
import PostDetailSidebar from '~/components/elements/post/PostDetailSidebar';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';

const BlogLeftSidebarScreen = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Our Press',
        },
    ];
    return (
        <>
            <PageContainer
                footer={<FooterDefault />}
                title="Post Detail 3"
                boxed={true}>
                <div className="ps-page--blog">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="container">
                        <div className="ps-blog--sidebar">
                            <div className="ps-blog__left">
                                <PostDetailSidebar />
                            </div>
                            <div className="ps-blog__right">
                                <WidgetBlogSearch />
                                <WidgetBlogCategories />
                                <WidgetBlogRecentPosts />
                                <WidgetBlogRecentComments />
                            </div>
                        </div>
                    </div>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default BlogLeftSidebarScreen;
