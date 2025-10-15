import React from 'react'

function Dashboard() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Admin Dashboard (Placeholder)</h2>
      <p>Filters and reports will be added in later modules.</p>
      <div>
        <label>Date: </label><input type="date" /><br /><br />
        <label>User: </label><input type="text" placeholder="Student name" /><br /><br />
        <label>Course: </label><input type="text" placeholder="Course name" /><br /><br />
        <button>Filter</button>
      </div>
    </div>
  )
}

export default Dashboard