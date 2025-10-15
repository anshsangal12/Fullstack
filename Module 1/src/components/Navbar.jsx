import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
      <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
      <Link to="/scanner" style={{ color: '#fff', textDecoration: 'none' }}>QR Scanner</Link>
      <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
    </nav>
  )
}

export default Navbar