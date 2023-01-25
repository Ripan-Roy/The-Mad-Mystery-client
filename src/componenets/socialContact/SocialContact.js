import React from "react";
import "./socialContact.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SocialContact() {
  return (
    <div className="social-contact-container">
      <div className="social-icons">
        <h2 className="social-title">Connect with Us</h2>
        <a href="https://facebook.com" className="social-icon facebook-icon">
          <FaFacebook /> Facebook
        </a>
        <a href="https://instagram.com" className="social-icon instagram-icon">
          <FaInstagram /> Instagram
        </a>
        <a href="https://twitter.com" className="social-icon twitter-icon">
          <FaTwitter /> Twitter
        </a>
        <a href="https://youtube.com" className="social-icon youtube-icon">
          <FaYoutube /> Youtube
        </a>
      </div>
      <div className="contact-form">
        <h2 className="contact-title">Contact Form</h2>
        <form>
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            required
          />
          <input
            type="text"
            className="input-field"
            placeholder="Subject"
            required
          />
          <textarea className="textarea-field" placeholder="Message"></textarea>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
