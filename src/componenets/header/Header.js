import logo from "../../assets/logo/tmmt-logo-2.png";
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <header className="header">
      <div className="left">
        <a href="https://www.tmmt.in/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div
        className="center"
        onMouseEnter={() => setShowTitle(true)}
        onMouseLeave={() => setShowTitle(false)}
      >
        <a href="https://www.tmmt.in/">
          {showTitle ? "The Mad Mystery Team" : "TMMT"}
        </a>
      </div>
      <div className="right">
        <a href="mailto:support@tmmt.in">Support</a>
        <a href="https://linktr.ee/tmmt.link">Linktree</a>
      </div>
    </header>
  );
};

export default Header;
