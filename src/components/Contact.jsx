import React from 'react'

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Ready to order? We're here to help!</p>
        </div>

        <div className="contact-grid">
          {/* Contact Card 1 - Phone */}
          <div className="contact-card">
            <div className="contact-icon-wrapper phone-icon">
              📞
            </div>
            <h3>Call Us</h3>
            <p>+92 300 1234567</p>
            <a href="tel:+923001234567" className="contact-btn">Call Now</a>
          </div>

          {/* Contact Card 2 - WhatsApp/Email */}
          <div className="contact-card">
            <div className="contact-icon-wrapper whatsapp-icon">
              💬
            </div>
            <h3>WhatsApp/Order</h3>
            <p>foodexpress.pk@gmail.com</p>
            <a href="https://wa.me/923001234567" className="whatsapp-btn">Message Us</a>
          </div>

          
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <h3>Send Message</h3>
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
