import React, { useState } from "react";
import Logo from "./Logo.js";

function Header({ getSearchInput }) {
  const [input, setInput] = useState("");

  const getInput = (e) => {
    e.preventDefault();
    getSearchInput(input);
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
          <button onClick={getInput}>KERESS</button>
        </div>
      </header>
    </>
  );
}

export default Header;
