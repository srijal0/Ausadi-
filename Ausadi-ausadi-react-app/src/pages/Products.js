import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../App';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Fetch products from public/products.json
    fetch(`${process.env.PUBLIC_URL}/products.json`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="product-grid">
      <h2>Shop Ausadi Products</h2>
      <input
        type="text"
        id="search-bar"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
