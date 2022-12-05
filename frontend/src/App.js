import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const weatherApiKey = "e58b2ab94045442a89f95504220512";

  const [searchInput, setSearchInput] = useState("");

  const getSearchInput = (input) => {
    let searchInput = input;
    setSearchInput(searchInput);
  };

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${searchInput}&aqi=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {});
  }, []);

  return (
    <>
      <div className="app-container">
        <Header getSearchInput={getSearchInput} />
        <Main searchInput={searchInput} />
      </div>
    </>
  );
}

export default App;
