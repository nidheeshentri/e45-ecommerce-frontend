import React from 'react'

function ProductCard() {
  const addToCart = () => {
    alert("Product added")
  }
  return (
    <>
        <div className='product-card'>
            <img src = "https://i5.walmartimages.com/seo/LENOVO-82N4002HUS-15-6-FHD-Celeron-N4500-1-1GHz-Intel-UHD-Graphics-4GB-RAM-64GB-SSD-Chrome-OS-Artic-Grey_65c06a0f-6e73-40f1-8cef-688f92fb586e.8c06b111c1d2fc659d1eb75c41e0c57d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" />
            <div className='product-details'>
              <p className = "product-title">Product1</p>
              <p className = "product-price">$1500</p>
              <button className='btn2'  onClick = {addToCart}>Add to cart</button>
            </div>
        </div>
    </>
  )
}

export default ProductCard