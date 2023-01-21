import React from 'react';

const FormCreateCategory = () => {
    return (
        <form className="ps-form ps-form--new" action="index.html" method="get">
            <div className="ps-form__content">
                <div className="form-group">
                    <label>
                        Name<sup>*</sup>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter category name"
                    />
                </div>
                <div className="form-group">
                    <label>
                        Slug<sup>*</sup>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter category slug"
                    />
                </div>
                <div className="form-group form-group--select">
                    <label>Parent</label>
                    <div className="form-group__content">
                        <select className="ps-select" title="Parent">
                            <option value="1">Parent 1</option>
                            <option value="2">Parent 2</option>
                            <option value="3">Parent 3</option>
                            <option value="4">Parent 4</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Enter category description"></textarea>
                </div>
            </div>
            <div className="ps-form__bottom">
                <button className="ps-btn ps-btn--gray">Reset</button>
                <button className="ps-btn ps-btn--sumbit success">
                    Add new
                </button>
            </div>
        </form>
    );
};

export default FormCreateCategory;
