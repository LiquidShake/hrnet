import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'

export default function CreateEmployee() {
  return (
    <main>
      <div className="wrapper">
        <h2>Create Employee</h2>
        <p>Please complete the following form with right information to create a new employee.</p>
        <Form />
        <Link to='/employees'>See all employees</Link>
      </div>
    </main>
  )
}
