import React, { useState } from 'react';
import Router from 'next/router';

const PanelSearch = () => {
    const [keyword, setKeyword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (keyword !== '') {
            Router.push(`/search?keyword=${keyword}`);
        }
    }

    return (
        <div className="ps-panel__search-results">
            <form
                className="ps-form--search-mobile"
                action="/"
                method="get"
                onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group--nest">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search something..."
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button>
                        <i className="icon-magnifier"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PanelSearch;
