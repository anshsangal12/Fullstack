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
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="name" className="p-2 border rounded" placeholder="Full Name" onChange={handleChange} />
        <input name="email" className="p-2 border rounded" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" className="p-2 border rounded" placeholder="Password" onChange={handleChange} />
        <button className="p-2 bg-green-600 text-white rounded" type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register