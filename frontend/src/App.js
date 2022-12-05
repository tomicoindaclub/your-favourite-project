import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const apiKey = "0c183950ab4549da8fb115413220512";

  const [searchInput, setSearchInput] = useState("");
  const [weatherhData, setWeatherData] = useState([]);

  const getSearchInput = (input) => {
    let searchInput = input;
    setSearchInput(searchInput);
  };

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput}&aqi=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        console.log(searchInput);
        console.log(weatherhData);
      });
  }, [searchInput]);

  return (
    <>
      <div className="app-container">
        <Header getSearchInput={getSearchInput} />
        <Main weatherhData={weatherhData} />
      </div>
    </>
  );
}

export default App;
