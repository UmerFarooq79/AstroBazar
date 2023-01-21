import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';
import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';

const Login = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        if (props.isLoggedIn === true) {
            Router.push('/');
        }
    }, [props.isLoggedIn]);

    const handleFeatureWillUpdate = (e) => {
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    };

    const handleLoginSubmit = (e) => {

        fetch('http://localhost:5000/Astro/auth/login', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' }
        }) .then((response) => response.json() )
          .then((data) => {
            if (data['username']) {
                props.dispatch(login());
                Router.push('/');
            }
            else{
                alert("something went wrong")
            }
          })
           
        
    };

    return (
        <div className="ps-my-account">
            <div className="container">
                <Form
                    className="ps-form--account"
                    onFinish={handleLoginSubmit}
                >
                    <ul className="ps-tab-list">
                        <li className="active">
                            <Link href="/account/login">
                                <a>Login</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/account/register">
                                <a>Register</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="sign-in">
                        <div className="ps-form__content">
                            <h5>Log In Your Account</h5>
                            <div className="form-group">
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input
                                        className="form-control"
                                        type="text"
                                        placeholder="Username or email address"
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
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
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
                            <div className="form-group">
                                <div className="ps-checkbox">
                                    <input
                                        className="form-control"
                                        type="checkbox"
                                        id="remember-me"
                                        name="remember-me"
                                    />
                                    <label htmlFor="remember-me">
                                        Rememeber me
                                    </label>
                                </div>
                            </div>
                            <div className="form-group submit">
                                <button
                                    type="submit"
                                    className="ps-btn ps-btn--fullwidth">
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className="ps-form__footer">
                            <p>Connect with:</p>
                            <ul className="ps-list--social">
                                <li>
                                    <a
                                        className="facebook"
                                        href="#"
                                        onClick={e =>
                                            this.handleFeatureWillUpdate(e)
                                        }>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="google"
                                        href="#"
                                        onClick={e =>
                                            this.handleFeatureWillUpdate(e)
                                        }>
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="twitter"
                                        href="#"
                                        onClick={e =>
                                            this.handleFeatureWillUpdate(e)
                                        }>
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="instagram"
                                        href="#"
                                        onClick={e =>
                                            this.handleFeatureWillUpdate(e)
                                        }>
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
export default connect(mapStateToProps)(Login);
