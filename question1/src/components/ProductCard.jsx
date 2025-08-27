import React from 'react'

function ProductCard({product, onViewDetail}) {
  return (
    <div style={{border: "1px solid #ccc", padding: 30, borderRadius: 8}}>
        <img src={product.image} style={{width: 100, height: 100, }}/>
        <h3>{product.title}</h3>
        <h3>R {product.price}</h3>

        <button onClick={() => onViewDetail(product.id)}>details</button>
    </div>
  )
}

export default ProductCard