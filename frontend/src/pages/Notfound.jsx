import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      Notfound page
      <Link to='/AdminDashboard' className='bg-red-700 p-2 rounded-md'> admin Dashboard</Link>
    </div>
  )
}

export default Notfound
