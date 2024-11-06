import React from 'react'

function ProductCard(props) {
  const addToCart = () => {
    alert("Product added")
  }
  return (
    <>
        <div className='product-card'>
            <img src = {props.product.image} />
            <div className='product-details'>
              <p className = "product-title">{props.product.title}</p>
              <p className = "product-price">${props.product.price}</p>
              <button className='btn2'  onClick = {addToCart}>Add to cart</button>
            </div>
        </div>
    </>
  )
}

export default ProductCard