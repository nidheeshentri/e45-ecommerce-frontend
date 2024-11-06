import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ProductDetails() {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  console.log(id)

  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then(res => {
      setProduct(res.data)
    })
    .catch(err => {
      alert(err.response.data.message)
      console.log(err)
    })
  }, [])

  return (
    <>
        <img src = {product.image} />
        <div>
            <p className = "product-title">{product.title}</p>
            <p className = "product-price">${product.price}</p>
            <Link to = "/cart" className='btn2'>Add to cart</Link>
        </div>
    </>
  )
}

export default ProductDetails