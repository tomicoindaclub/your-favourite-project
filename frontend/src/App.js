import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const apiKey = "0c183950ab4549da8fb115413220512";
  const imageApiKey =
    "563492ad6f917000010000019fe6895bc4de4b2f816d02c64408d69f";

  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState(undefined);
  const [imageData, setImageData] = useState(undefined);

  useEffect(() => {
    if (searchInput.length > 3) {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setWeatherData(data);
        });
    }
  }, [searchInput]);

  useEffect(() => {
    if (weatherData?.location?.name) {
      fetch(
        `https://api.pexels.com/v1/search?query=${weatherData.location.name}&per_page=1`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `${imageApiKey}`,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImageData(data);
        });
    }
  }, [weatherData]);

  return (
    <>
      <div className="app-container">
        <Header setSearchInput={setSearchInput} searchInput={searchInput} />
        <Main weatherData={weatherData} imageData={imageData} />
      </div>
    </>
  );
}

export default App;
