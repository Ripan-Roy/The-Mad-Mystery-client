import React from "react";
import "./subscriptionForm.css";
import emailImage from "../../assets/gifs/subscribe.gif";

export default function SubscriptionForm() {
  return (
    <div className="subscription-form">
      <img src={emailImage} alt="Email Subscribe" className="email-image" />
      <div className="form-content">
        <h3>Get it first.</h3>
        <p>
          Stay ahead of the curve and sign up for the latest news and updates
          from TMMT.
        </p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <label className="privacy-policy">
            <input type="checkbox" required />
            I'm okay with Mozilla handling my info as explained in this Privacy
            Policy
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <a href="#" className="unsubscribe-link">
          Unsubscribe
        </a>
      </div>
    </div>
  );
}
