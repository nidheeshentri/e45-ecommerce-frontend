import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
        <h1>Register</h1>
        <form>
            <input type = "text" className='input2' placeholder = "Username"/>
            <input type = "text" className='input2' placeholder = "Email"/>
            <input type = "text" className='input2' placeholder = "Phone No"/>
            <input type = "text" className='input2' placeholder = "Passsword"/>
            <input type = "text" className='input2' placeholder = "Confirm Password"/>
            <div className='text-right mb-10'>Agree the terms and conditions <input type = "checkbox"/></div>
            <input type="submit" value="Register" className='btn2'/>
        </form>
        <p>Already have an account <Link to = "/login">Login</Link></p>
    </>
  )
}

export default Register