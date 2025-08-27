import { useState } from 'react'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import './App.css'

function App() {
  const [view, setView] = useState("list"); 
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleViewDetail = (id) => {
    console.log("details", id)
    setSelectedProductId(id);
    setView("detail");
  };

  const handleBack = () => {
    setView("list");
    setSelectedProductId(null);
  };

  return (
    <div>
      <h1>product catalog</h1>
      {view === "list" && <ProductList onViewDetail={handleViewDetail} />}
      {view === "detail" && (
        <ProductDetails id={selectedProductId} onBack={handleBack} />
      )}
    </div>
  )
}

export default App
