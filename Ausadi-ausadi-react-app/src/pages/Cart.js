import React, { useContext } from 'react';
import { CartContext } from '../App';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <>
      <section className="hero">
        <h2>Your Cart</h2>
        <p>Review your selected eco-friendly products.</p>
      </section>
      <section className="cart-section">
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is currently empty.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.name} - ${item.price}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="cart-summary">
          <p>Total: ${total.toFixed(2)}</p>
          <button>Proceed to Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
