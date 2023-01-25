import React from "react";
import "./socialContact.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SocialContact() {
  return (
    <div className="">
      <p>Connect with Us</p>
      <div className="social-contact-container">
        <div className="social-icons">
          <a href="https://facebook.com">
            <FaFacebook /> Facebook
          </a>
          <a href="https://instagram.com">
            <FaInstagram /> Instagram
          </a>
          <a href="https://twitter.com">
            <FaTwitter /> Twitter
          </a>
          <a href="https://youtube.com">
            <FaYoutube /> Youtube
          </a>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
