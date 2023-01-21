import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const RegistrationForm = () => {
  // Use the useRouter hook to get the router object
  const router = useRouter();

  // State to store the values of the input fields
  const [formData, setFormData] = React.useState({
    // firstName: '',
    // lastName: '',
    username: '',
    email: '',
    password: '',
    CNIC: '',
    phone: ''
  });

  // Event handler for when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a request to the server to register the user with the provided information

    fetch('http://localhost:5000/Astro/seller/auth/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data['username'])
        if (data['username']) {
          // Registration was successful, redirect the user to the home page
          router.push('/login');
        } else {
          // Show an error message
          alert("There is a problem");
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

    <div>
    <form className='RegisterForm' onSubmit={handleSubmit}>
      {/* <label htmlFor="firstName">First name:</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

      <label htmlFor="lastName">Last name:</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /> */}
      <img className='register-logo' src="/img/logo.png" alt="" /> <h3 className='register-label-main'>Seller Dashboard</h3>

      <label className='register-label' htmlFor="username">Username</label>
      <input className='register-input' type="text" name="username" value={formData.username} onChange={handleChange} />

      <label className='register-label' htmlFor="email">Email</label>
      <input className='register-input' type="email" name="email" value={formData.email} onChange={handleChange} />

      <label className='register-label' htmlFor="password">Password</label>
      <input className='register-input' type="password" name="password" value={formData.password} onChange={handleChange} />

      <label className='register-label' htmlFor="id">CNIC</label>
      <input className='register-input' type="text" name="CNIC" value={formData.id} onChange={handleChange} />
     <label className='register-label' htmlFor="id">Phone</label>
      <input className='register-input' type="text" name="phone" value={formData.phone} onChange={handleChange} />
      <button className='register-button'type="submit">Sign Up</button>
      <Link className='login-link' href='/login'> Already have an account? Login </Link>
      </form>
    </div>
    
  )
  }

  export default RegistrationForm;