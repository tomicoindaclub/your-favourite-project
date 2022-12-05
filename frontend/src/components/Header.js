import React, { useState } from "react";
import Logo from "./Logo.js";

function Header({ getCityName }) {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    getCityName(input);
  };

  return (
    <>
      <header>
        <Logo />
        <div className="search-bar">
          <input
            type="text"
            name="filter"
            id="filter"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleClick}>KERESS</button>
        </div>
      </header>
    </>
  );
}

export default Header;
