import { useState } from "react";
import Navbar from "../assets/Components/homeComponents/navbar";
import SecondBanner from "../assets/Components/homeComponents/SecondBanner";
import Footer from "../assets/Components/homeComponents/Footer";
import "./Contact.css";
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setShowForm(false); // Hide form after submission
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        {/* Heading */}
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-subtitle">
          Contact us to publish your content and show ads on our website to get a good reach.
        </p>

        {/* Contact Cards */}
        <div className="contact-cards-container">
          {/* Office Card */}
          <div className="contact-card">
            <div className="icon-container">
              <FaHome className="contact-icon" />
            </div>
            <h3>Office</h3>
            <p>123 Blog Street, Content City, Digital State 45678</p>
          </div>

          {/* Email Card */}
          <div className="contact-card">
            <div className="icon-container">
              <FaEnvelope className="contact-icon" />
            </div>
            <h3>Email</h3>
            <p>contact@blogapp.com</p>
          </div>

          {/* Phone Card */}
          <div className="contact-card">
            <div className="icon-container">
              <FaPhone className="contact-icon" />
            </div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          {/* Map */}
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462117.0587492621!2d66.82512483310312!3d25.193457043206735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739887014717!5m2!1sen!2s"
              className="map-iframe"
            ></iframe>
          </div>

          {/* Contact Us Button */}
          {!showForm && (
            <button className="contact-us-button" onClick={() => setShowForm(true)}>
              Contact Us
            </button>
          )}

          {/* Contact Form (Shown on Button Click) */}
          {showForm && (
            <div className="contact-form">
              <form className="form-container" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <SecondBanner/>
      <Footer />
    </div>
  );
};

export default Contact;
