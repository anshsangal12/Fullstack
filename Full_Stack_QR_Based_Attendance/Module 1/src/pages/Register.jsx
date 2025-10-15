import React, { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('User registered successfully (UI only)')
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} /><br /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register