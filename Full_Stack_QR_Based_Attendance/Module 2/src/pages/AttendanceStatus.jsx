import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function AttendanceStatus() {
  const loc = useLocation()
  const state = loc.state || {}
  const { qr = 'unknown', status = 'unknown', time = new Date().toISOString() } = state

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-center">
      <h2 className="text-2xl font-semibold mb-2">Attendance Status</h2>
      <p className="mb-2">Scanned QR: <span className="font-mono">{qr}</span></p>
      <p className="mb-2">Status: <strong className="text-green-600">{status}</strong></p>
      <p className="mb-4 text-sm text-gray-500">Marked at: {new Date(time).toLocaleString()}</p>
      <Link to="/scanner" className="inline-block p-2 bg-blue-600 text-white rounded">Scan another</Link>
      <Link to="/dashboard" className="inline-block p-2 ml-2 border rounded">Go to Dashboard</Link>
    </div>
  )
}

export default AttendanceStatus