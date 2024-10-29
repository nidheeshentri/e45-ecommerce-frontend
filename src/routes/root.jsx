import React from 'react'
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
    <div className='container'>
        <header className = "header">
            <h1>Header</h1>
            <Link to = "/login">Login</Link>
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