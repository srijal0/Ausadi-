import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <h2>Nature Meets Wellness</h2>
        <p>100% Organic, Eco-friendly Medicines</p>
        <Link to="/products" className="btn">Shop Now</Link>
      </section>
      <section className="stories">
        <div className="story">
          <img src="/images/story1.jpg" alt="Go Green" />
          <p>Go Green</p>
        </div>
        <div className="story">
          <img src="/images/story2.jpg" alt="Organic Life" />
          <p>Organic Life</p>
        </div>
        <div className="story">
          <img src="/images/story3.jpg" alt="Plant Power" />
          <p>Plant Power</p>
        </div>
      </section>
      <section className="product-preview">
        <h2>🌍 Featured Eco Products</h2>
        <div className="grid">
          <div className="product-card">
            <img src="/images/turmeric.jpg" alt="Turmeric Capsules" />
            <p>Turmeric Capsules</p>
          </div>
          <div className="product-card">
            <img src="/images/aloe.jpg" alt="Aloe Vera Gel" />
            <p>Aloe Vera Gel</p>
          </div>
          <div className="product-card">
            <img src="/images/herbal.jpg" alt="Herbal Cough Syrup" />
            <p>Herbal Cough Syrup</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
