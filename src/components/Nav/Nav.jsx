import React from 'react'
import './nav.scss'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="wrapper">
        <div>
          <Link to="/">
            <h1>HRNet</h1>
          </Link>
        </div>
        <div>
          <Link to='/'>Add new employee</Link>
          <Link to='/employees'>All employees</Link>
        </div>
      </div>
    </nav>
  )
}
