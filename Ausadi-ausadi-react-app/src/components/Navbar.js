import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../App';

const Navbar = () => {
  const location = useLocation();
  const { cart } = useContext(CartContext);

  return (
    <header className="sticky-header">
      <h1>🌱 Ausadi</h1>
      <nav>
        <ul>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/products" className={location.pathname === "/products" ? "active" : ""}>Shop</Link></li>
          <li><Link to="/mission" className={location.pathname === "/mission" ? "active" : ""}>Our Mission</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
          <li><Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>Profile</Link></li>
          <li><Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>🛒 {cart.length}</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
