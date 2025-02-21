import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="hero">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you!</p>
      </section>
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
