import React from 'react'
import AttendanceTable from '../components/AttendanceTable'

const dummyLogs = [
  { time: '2025-10-15 09:01', user: 'Ansh Sangal', course: 'CS101', status: 'Present' },
  { time: '2025-10-15 09:05', user: 'Ravi Kumar', course: 'CS101', status: 'Present' },
  { time: '2025-10-14 09:02', user: 'Meeta Sharma', course: 'CS102', status: 'Absent' },
  { time: '2025-10-13 09:00', user: 'Ansh Sangal', course: 'CS101', status: 'Present' }
]

function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <p className="mb-4 text-gray-600">Use the filters to search attendance logs (dummy data)</p>
      <AttendanceTable logs={dummyLogs} />
    </div>
  )
}

export default Dashboard