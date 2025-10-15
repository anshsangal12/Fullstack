import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-3">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold">QR Attendance</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/scanner" className="hover:underline">QR Scanner</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar