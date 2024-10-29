import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

function ProductList() {
  return (
    <>
        <form className='text-right'>
            <input type = "text" placeholder = "Search" className='input1'/>
            <input type = "submit" value = "Search" className='btn1'/>
        </form>
        <h1>Product List</h1>
        <div className='product-list'>
            <Link to = "/product-details/10">
                <ProductCard />
            </Link>
            <Link to = "/product-details/11">
                <ProductCard />
            </Link>
            <Link to = "/product-details/12">
                <ProductCard />
            </Link>
            <Link to = "/product-details/13">
                <ProductCard />
            </Link>
        </div>
        <div className='text-center'>
            <button className='loadmore-btn'>Load more</button>
        </div>
    </>
  )
}

export default ProductList