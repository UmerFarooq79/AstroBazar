import React from 'react';

const FormHeaderSearch = () => {
    return (
        <form className="ps-form--search-bar" action="index.html" method="get">
            <input
                className="form-control"
                type="text"
                placeholder="Search something"
            />
            <button>
                <i className="icon-magnifier"></i>
            </button>
        </form>
    );
};

export default FormHeaderSearch;
