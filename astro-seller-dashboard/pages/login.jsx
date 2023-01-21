import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const LoginForm = () => {
  // Use the useRouter hook to get the router object
  const router = useRouter();

  // State to store the values of the input fields
  const [formData, setFormData] = React.useState({
    username: '',
    password: ''
  });

  // Event handler for when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/Astro/seller/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    }) .then((response) => response.json() )
      .then((data) => {
        // Handle the response from the server
        console.log(data['username'])
        if (data['username']) {
          // Login was successful, redirect the user to the home page
          router.push('/home');
        } else {
          // Show an error message
          alert("error");
        }
      });
  };

  // Event handler for when the input values are changed
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (

    <div className='login-container'>
    <form className='LoginForm'onSubmit={handleSubmit}>
      <img className='login-logo' src="/img/logo.png" alt="" /> <h3 className='login-label-main'>Seller Dashboard</h3>
      <label className='login-label' htmlFor="username">Username</label>
      <input className='login-input'type="text" name="username" value={formData.username} onChange={handleChange} />

      <label className='login-label' htmlFor="password">Password</label>
      <input className='login-input' type="password" name="password" value={formData.password} onChange={handleChange} />

      <button className='login-button' type="submit">Log In</button>
      <Link className='register-link' href='/register'> Don't have an account? Sigh Up </Link>
    </form>
    </div>
    
  );
};

export default LoginForm;
