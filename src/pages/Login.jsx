import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <h1>Login</h1>
        <form>
            <input type = "text" className='input2' placeholder = "Email"/>
            <input type = "text" className='input2' placeholder = "Passsword"/>
            <input type="submit" value="Login" className='btn2'/>
        </form>
        <p>Create an account <Link to = "/register">Register</Link></p>
    </>
  )
}

export default Login