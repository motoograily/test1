import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

function ProductList({onViewDetail}) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((x) => x.json()).then((data) => setProducts(data))
    }, [])

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onViewDetail={onViewDetail} />
      ))}
    </div>
  )
}

export default ProductList