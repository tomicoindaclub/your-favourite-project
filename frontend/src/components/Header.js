import React, { useState, useEffect } from "react";
import AutoComplete from "./AutoComplete";

function Header({ setSearchOutput }) {
  const [autoComplete, setAutoComplete] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const autoCompApiKey = `0c183950ab4549da8fb115413220512`;

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/search.json?key=${autoCompApiKey}&q=${searchInput}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => setAutoComplete(data));
  }, [searchInput]);

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
            placeholder="Write a city here..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div>
          {autoComplete.length > 0 &&
            autoComplete.map((autoC) => (
              <AutoComplete
                name={autoC.name}
                setSearchOutput={setSearchOutput}
                setAutoComplete={setAutoComplete}
              />
            ))}
        </div>
      </header>
    </>
  );
}

export default Header;
