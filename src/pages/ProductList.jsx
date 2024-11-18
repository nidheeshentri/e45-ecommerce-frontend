import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import axios from "axios"


function ProductList() {
    const apiLink = import.meta.env.VITE_API_LINK
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000")
    .then(res => {
        console.log(res.data)
        setProducts(res.data)
    })
  }, [])
  return (
    <>
        <form className='text-right'>
            <input type = "text" placeholder = "Search" className='input1'/>
            <input type = "submit" value = "Search" className='btn1'/>
        </form>
        <h1>Product List</h1>
        <div className='product-list'>
            {products.map((product, index) => {
                return(
                    <ProductCard product = {product} key = {index}/>
                )
            })}
        </div>
        <div className='text-center'>
            <button className='loadmore-btn'>Load more</button>
        </div>
    </>
  )
}

export default ProductList