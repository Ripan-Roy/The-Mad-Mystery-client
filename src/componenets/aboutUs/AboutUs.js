import React from "react";
import "./aboutUs.css";
import aboutUsImage from "../../assets/gifs/subscribe.png";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-description">
        <h3>About Us</h3>
        <p>
          We are a dedicated team of individuals who are passionate about
          creating unique and exciting experiences for people of all ages. Our
          belief is that TMMT are not only about solving clues but also a great
          way to learn and discover new things. Our team members come from
          diverse backgrounds and bring a wealth of knowledge and creativity to
          the table. Together, we design games that are engaging, educational,
          and accessible to all.
        </p>
      </div>
      <img src={aboutUsImage} alt="About Us" className="about-us-image" />
    </div>
  );
}
