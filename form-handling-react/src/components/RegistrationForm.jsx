import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Basic validation
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }

    setError('');
    console.log('User Registered:', formData);
    // Here you can call your mock API to register the user
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username} // Set value for username
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email} // Set value for email
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password} // Set value for password
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;