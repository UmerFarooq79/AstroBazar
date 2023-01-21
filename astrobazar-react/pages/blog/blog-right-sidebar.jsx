import React from 'react';
import BreadCrumb2 from '~/components/elements/BreadCrumb2';
import WidgetBlogSearch from '~/components/shared/widgets/WidgetBlogSearch';
import WidgetBlogCategories from '~/components/shared/widgets/WidgetBlogCategories';
import WidgetBlogRecentPosts from '~/components/shared/widgets/WidgetBlogRecentPosts';
import WidgetBlogRecentComments from '~/components/shared/widgets/WidgetBlogRecentComments';
import ModulePostGridItems from '~/components/partials/blog/modules/ModulePostGridItems';
import Newletters from '~/components/partials/commons/Newletters';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';

const BlogRightSidebarPage = () => {
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
        <PageContainer footer={<FooterDefault />} title="Blog ">
            <div className="ps-page--blog">
                <div className="container">
                    <div className="ps-page__header">
                        <h1>Our Press</h1>
                        <BreadCrumb2 breacrumb={breadCrumb} />
                    </div>
                    <div className="ps-blog--sidebar">
                        <div className="ps-blog__left">
                            <ModulePostGridItems columns={3} />
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
    );
};

export default BlogRightSidebarPage;
