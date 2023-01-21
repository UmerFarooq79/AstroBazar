import React from 'react';

const FormAccountSettings = () => {
    return (
        <form
            className="ps-form--account-settings"
            action="index.html"
            method="get">
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Display Name</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Role</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Bio</label>
                        <textarea
                            className="form-control"
                            rows="6"
                            placeholder=""></textarea>
                    </div>
                </div>
            </div>
            <div className="ps-form__submit text-center">
                <button className="ps-btn ps-btn--gray mr-3">Cancel</button>
                <button className="ps-btn success">Update Profile</button>
            </div>
        </form>
    );
};

export default FormAccountSettings;
