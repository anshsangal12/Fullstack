import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import QRScanner from './components/QRScanner'
import AttendanceStatus from './pages/AttendanceStatus'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scanner" element={<QRScanner />} />
          <Route path="/attendance-status" element={<AttendanceStatus />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App