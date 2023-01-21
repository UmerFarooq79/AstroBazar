import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';

import { Form, Input } from 'antd';
import { connect } from 'react-redux';

const Register = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    });


const handleSubmit = (e) => {
    fetch('http://localhost:5000/Astro/auth/register', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' }
        }) .then((response) => response.json() )
          .then((data) => {
            if (data['username']) {
                Router.push('/account/login');
            }
            else{
                alert('Something went wrong')
            }
          })



    
     
};

return (
    <div className="ps-my-account">
        <div className="container">
            <Form
                className="ps-form--account"
                onFinish={handleSubmit}>
                <ul className="ps-tab-list">
                    <li>
                        <Link href="/account/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    <li className="active">
                        <Link href="/account/register">
                            <a>Register</a>
                        </Link>
                    </li>
                </ul>
                <div className="ps-tab active" id="register">
                    <div className="ps-form__content">
                        <h5>Register An Account</h5>
                        <div className="form-group">
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your email!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                />
                            </Form.Item>
                        </div>
                        <div className="form-group">
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your username',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Userame"
                                    value={formData.username}
                                        onChange={(e) =>
                                            setFormData({ ...formData, username: e.target.value })
                                        }
                                />
                            </Form.Item>
                        </div>
                        <div className="form-group form-forgot">
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your password!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="password"
                                    placeholder="Password..."
                                    value={formData.password}
                                        onChange={(e) =>
                                            setFormData({ ...formData, password: e.target.value })
                                        }
                                />
                            </Form.Item>
                        </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Register
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }

const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Register);
