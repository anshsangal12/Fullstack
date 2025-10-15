import React, { useState } from 'react'

function AttendanceTable({ logs }) {
  const [filter, setFilter] = useState({ user: '', course: '', date: '' })

  const applyFilter = (item) => {
    const matchUser = filter.user === '' || item.user.toLowerCase().includes(filter.user.toLowerCase())
    const matchCourse = filter.course === '' || item.course.toLowerCase().includes(filter.course.toLowerCase())
    const matchDate = filter.date === '' || item.date.startsWith(filter.date)
    return matchUser && matchCourse && matchDate
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="mb-4 flex flex-col sm:flex-row gap-2">
        <input placeholder="User name" className="p-2 border rounded" value={filter.user}
          onChange={(e)=>setFilter({...filter, user: e.target.value})} />
        <input placeholder="Course" className="p-2 border rounded" value={filter.course}
          onChange={(e)=>setFilter({...filter, course: e.target.value})} />
        <input type="date" className="p-2 border rounded" value={filter.date}
          onChange={(e)=>setFilter({...filter, date: e.target.value})} />
        <button className="p-2 bg-gray-700 text-white rounded" onClick={()=>setFilter({user:'',course:'',date:''})}>Clear</button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Time</th>
            <th className="py-2">User</th>
            <th className="py-2">Course</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.filter(applyFilter).map((row, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-2">{row.time}</td>
              <td className="py-2">{row.user}</td>
              <td className="py-2">{row.course}</td>
              <td className="py-2">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {logs.filter(applyFilter).length === 0 && <p className="mt-4 text-gray-500">No records found</p>}
    </div>
  )
}

export default AttendanceTable