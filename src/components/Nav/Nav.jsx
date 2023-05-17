import React from 'react'
import logo from '../../logo.svg'
import './nav.scss'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="wrapper">
        <div>
          <Link to="/">
            <img
              className="logo"
              src={logo}
              alt="HRNet Logo"
            />
            <h1>HRNet</h1>
          </Link>
        </div>
        <div>
          <Link to='/create-employee'>Add new employee</Link>
          <Link to='/employees'>All employees</Link>
        </div>
      </div>
    </nav>
  )
}
