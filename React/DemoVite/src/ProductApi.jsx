import React from 'react'
import useFetch from './Hooks/useFetch'

function ProductApi() {

    const {data} = useFetch("https://fakestoreapi.com/products")

    console.log(data)

  return (
    <div>
      
    </div>
  )
}

export default ProductApi
