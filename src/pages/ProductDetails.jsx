import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetails() {
  return (
    <>
        <img src = "https://i5.walmartimages.com/seo/LENOVO-82N4002HUS-15-6-FHD-Celeron-N4500-1-1GHz-Intel-UHD-Graphics-4GB-RAM-64GB-SSD-Chrome-OS-Artic-Grey_65c06a0f-6e73-40f1-8cef-688f92fb586e.8c06b111c1d2fc659d1eb75c41e0c57d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" />
        <div>
            <p className = "product-title">Product1</p>
            <p className = "product-price">$1500</p>
            <Link to = "/cart" className='btn2'>Add to cart</Link>
        </div>
    </>
  )
}

export default ProductDetails