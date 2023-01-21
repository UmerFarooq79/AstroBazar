import React, { Component } from 'react';

import Link from 'next/link';
import WidgetBlogSearch from '~/components/shared/widgets/WidgetBlogSearch';
import WidgetBlogCategories from '~/components/shared/widgets/WidgetBlogCategories';
import WidgetBlogRecentPosts from '~/components/shared/widgets/WidgetBlogRecentPosts';
import WidgetBlogRecentComments from '~/components/shared/widgets/WidgetBlogRecentComments';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, recentPosts } = this.props;
        return <div className="sidebar"></div>;
    }
}

export default Sidebar;
