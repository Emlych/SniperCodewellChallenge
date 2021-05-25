import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <img className="img-logo" src="./Assets/Logo.svg" alt="Snipper Logo" />
        <ul className="header__tablet">
          <li>
            <img src="./Assets/Search Icon.svg" alt="search icon" />
          </li>
          <li>
            <p>Sign in</p>
          </li>
          <li>
            <button className="header__nav-button">
              <span>Get started</span> - it's free
            </button>
          </li>
        </ul>

        <img
          className="img-hamburger"
          src="./Assets/Hamburger Menu.svg"
          alt="Hamburger icon"
        />
      </nav>
      <h1>Gorgeous Code Snippets</h1>
      <p className="header__description-snipper">
        With Snipper, create fully customizable code snippets in a matter of
        seconds right from your browser.
      </p>
      <button className="header__button">
        <span>Get started</span> - it's free
      </button>
      <p className="header__description-credit">No credit card required.</p>
      <img src="./Assets/Snippet Image.png" alt="Snippet of code" />
    </div>
  );
}

export default Header;
