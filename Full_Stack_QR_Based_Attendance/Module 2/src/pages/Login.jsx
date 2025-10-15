import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Login attempt by ${email}`)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="p-2 border rounded" type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input className="p-2 border rounded" type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button className="p-2 bg-blue-600 text-white rounded" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login