import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Cart() {
    const apiLink = import.meta.env.VITE_API_LINK
    console.log(apiLink);  // "https://api.example.com"
    const [cartItems, setCartItems] = useState([])
    const [countUpdated, setCountUpdated] = useState(true)

    const getCartData = () => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: token
            }
        }
        axios.get(apiLink+"/cart/", config)
        .then(res => {
            setCartItems(res.data.cartItems)
            console.log(res.data.cartItems)
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    useEffect(()=>{
        getCartData()
    }, [])

    const updateCartCount = (id, count, index) => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: token
            }
        }
        const data = {
            count: count,
            cartItemId: id
        }
        axios.post(apiLink+"/cart/update-count", data, config)
        .then(res => {
            getCartData()
        })
        .catch(err => {
            console.log(err.response)
        })
    }

  return (
    <>
        <h1>Cart list</h1>
        <ul className = "cart-list">
            {cartItems.map((cartItem, index) => (
                <li className='cart-item'>
                    <img src = "https://i5.walmartimages.com/seo/LENOVO-82N4002HUS-15-6-FHD-Celeron-N4500-1-1GHz-Intel-UHD-Graphics-4GB-RAM-64GB-SSD-Chrome-OS-Artic-Grey_65c06a0f-6e73-40f1-8cef-688f92fb586e.8c06b111c1d2fc659d1eb75c41e0c57d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" width={"100px"} />
                    <p className = "product-title">{cartItem.product.title}</p>
                    <p className = "product-price">${cartItem.product.price}</p>
                    <div>
                        <button onClick = {() => updateCartCount(cartItem._id, cartItem.count-1, index)}>-</button>
                        <span className='cart-item-quantity'>{cartItem.count}</span>
                        <button onClick = {() => updateCartCount(cartItem._id, cartItem.count+1, index)}>+</button>
                    </div>
                    <p className = "product-price">${cartItem.product.price * cartItem.count}</p>
                </li>
            ))}
            
        </ul>
        <p className='text-right'>Total price: $15000</p>

        <Link to = "/checkout" className='btn2'>Checkout</Link>
    </>
  )
}

export default Cart