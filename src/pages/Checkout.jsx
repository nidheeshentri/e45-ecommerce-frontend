import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <>
        <h1>Address</h1>
        <form>
            <input type = "text" className='input2' placeholder = "Addresss Line 1"/>
            <input type = "text" className='input2' placeholder = "Addresss Line 2"/>
            <input type = "text" className='input2' placeholder = "City"/>
            <input type = "text" className='input2' placeholder = "State"/>
            <input type = "text" className='input2' placeholder = "Country"/>
            <input type = "text" className='input2' placeholder = "Pincode"/>
            <Link to = "/my-orders" class = "btn2">Confirm</Link>
        </form>
    </>
  )
}

export default Checkout