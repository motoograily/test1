// components/ProductDetail.jsx
import { useState, useEffect } from "react";

export default function ProductDetail({ id, onBack }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div style={{ padding: "50px", display: "flex", flexDirection: "column", gap: 50, alignContent: "center", alignItems: "center"}}>
      <img src={product.image} alt={product.title} style={{ width: "150px", margin: 50 }} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <button onClick={onBack} style={{margin: 50}}>⬅ Back</button>
    </div>
  );
}
