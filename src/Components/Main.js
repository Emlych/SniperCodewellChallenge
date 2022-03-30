import React from "react";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <img
        src="/SniperCodewellChallenge/Assets/Customizable Image.png"
        alt="customizable snippet"
      />
      <div className="main__container">
        <h2>A fully customizable code snippet editor</h2>
        <p>
          Fully customize the color scheme of your code snippet, or use our own
          premade color schemes. Export your code snippets in JPG, PDF, PNG, or
          any of the other 10+ common extensions.
        </p>
        <button className="main__button">
          <span>Get started</span> - it's free
        </button>
      </div>
    </div>
  );
}

export default Main;
