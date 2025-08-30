import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/style.css'

export const Navbarapp = () => {
  return (
    <>
    <div className="usernavbar">
        <div className="innernavbar">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}> Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}> About US</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}> Contact US</NavLink>
        </div>
    </div>
    </>
  )
}
