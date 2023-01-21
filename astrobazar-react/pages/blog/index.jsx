import React from 'react';
import BlogItemsGridView from '~/components/partials/blog/BlogItemsGridView';
import BreadCrumb2 from '~/components/elements/BreadCrumb2';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';

const BlogGridPage = () => {
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
                    <BlogItemsGridView columns={4} />
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default BlogGridPage;
