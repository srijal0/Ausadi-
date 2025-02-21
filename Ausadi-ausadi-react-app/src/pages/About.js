import React from 'react';

const About = () => {
  return (
    <>
      <section className="hero">
        <h2>About Ausadi</h2>
        <p>Our Journey Towards Sustainable Health</p>
      </section>
      <section className="about-content">
        <div className="about-text">
          <h3>Our Story</h3>
          <p>
            Founded with a passion for nature and health, Ausadi believes that the future of medicine is organic and eco-friendly. We are committed to delivering products that nurture your well-being and the planet.
          </p>
          <h3>Our Commitment</h3>
          <p>
            We support sustainable practices, use biodegradable packaging, and invest in reforestation projects. Every product is carefully curated to ensure quality, safety, and environmental responsibility.
          </p>
          <h3>Our Vision</h3>
          <p>
            Our vision is a world where wellness and nature coexist in harmony. By empowering our communities with natural health solutions, we strive to create a greener, healthier future for all.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/about.jpg" alt="About Ausadi" />
        </div>
      </section>
    </>
  );
};

export default About;
