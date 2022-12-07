import React from "react";

function Header({ searchInput, setSearchInput }) {
  return (
    <>
      <header>
        <div className="titleApp">
          <div className="logo"></div>
          <h1>Weather App</h1>
        </div>
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
