import React from 'react';

const WidgetBlogSearch = () => {
    return (
        <aside className="widget widget--blog widget--search">
            <form
                className="ps-form--widget-search"
                action="do_action"
                method="get">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search..."
                />
                <button>
                    <i className="icon-magnifier"></i>
                </button>
            </form>
        </aside>
    );
};

export default WidgetBlogSearch;
