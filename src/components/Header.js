import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  };

  return (
    <div className="header">
      <div
        id="header__bar"
        style={{
          transform: showHeaderBar ? `translateY(120px)` : `translateY(0px)`,
        }}
      >
        <h3 className="header__bar__title">Aspiring Developer</h3>
        <div className="header__bar__icons">
          <a href="https://github.com/Shruti-art" target="">
            <img src="https://img.icons8.com/ios/50/000000/github--v1.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/shruti-pandey-0716b3228/"
            target=""
          >
            <img src="https://img.icons8.com/ios/50/000000/linkedin.png" />
          </a>
        </div>
      </div>

      <div className="header-logo">
        <span>Sort</span>Spectra
      </div>
      <div className="header__options">
        <h3 className="header__option" onClick={contactHandler}>
          <span>L</span>et's <span>C</span>onnect
        </h3>
      </div>
    </div>
  );
}

export default Header;
