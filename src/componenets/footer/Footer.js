import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Copyright &copy;{new Date().getFullYear()} The Mad Mystery</p>
      <a href="tmmt.in/tnc">Terms of Use</a> | <a href="tmmt.in/privacy-polic">Privacy Policy</a>
    </footer>
  );
}
