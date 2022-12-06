import React from "react";
import Logo from "./Logo.js";

function Header({ searchInput, setSearchInput }) {
  return (
    <>
      <header>
        <Logo />
        <div className="search-bar">
          <input
            type="text"
            name="search"
            id="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
