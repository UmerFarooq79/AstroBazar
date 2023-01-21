import React, { Component } from 'react';

class FormEditAddress extends Component {
    render() {
        return (
            <form className="ps-form--edit-address">
                <div className="ps-form__header">
                    <h3>Billing address</h3>
                </div>
                <div className="ps-form__content">
                    <div className="form-group">
                        <label>
                            FirstName <sup>*</sup>
                        </label>
                        <input type="text" placeholder="" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Lastname <sup>*</sup>
                        </label>
                        <input type="text" placeholder="" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Company Name
                        </label>
                        <input type="text" placeholder="" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Country <sup>*</sup>
                        </label>
                        <input type="text" placeholder="" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Street Address <sup>*</sup>
                        </label>
                        <input type="text" placeholder="" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            State <sup>*</sup>
                        </label>
                        <input type="text" placeholder="" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Postcode <sup>*</sup>
                        </label>
                        <input type="text" placeholder="" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Email address <sup>*</sup>
                        </label>
                        <input type="text" placeholder="" className="form-control"/>
                    </div>
                    <div className="form-group submit">
                        <button className="ps-btn">Save Address</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default FormEditAddress;
