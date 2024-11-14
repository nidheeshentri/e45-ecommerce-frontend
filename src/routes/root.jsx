import React from 'react'
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
    <div className='container'>
        <header className = "header">
            <h1>Header</h1>
            <div>
              <Link to = "/cart" className='nav-link'>Cart (10)</Link>
              <Link to = "/login" className='nav-link'>Login</Link>
            </div>
        </header>
        <Outlet />
        <footer>
            <h1>Footer</h1>
        </footer>
    </div>
    </>
  )
}

export default Root