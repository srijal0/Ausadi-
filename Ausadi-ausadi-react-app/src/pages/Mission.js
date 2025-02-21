import React from 'react';

const Mission = () => {
  return (
    <>
      <section className="hero">
        <h2>Our Mission</h2>
        <p>Healing People, Healing the Planet</p>
      </section>
      <section className="mission-content">
        <div className="content">
          <h3>Our Commitment</h3>
          <p>
            At Ausadi, we believe in sustainable wellness. Our products are carefully curated to ensure they are organic, eco-friendly, and kind to the environment.
          </p>
          <p>
            We use biodegradable packaging and for every order, we plant a tree to contribute to a greener future.
          </p>
        </div>
        <div className="mission-image">
          <img src="/images/mission.jpg" alt="Our Mission" />
        </div>
      </section>
    </>
  );
};

export default Mission;
