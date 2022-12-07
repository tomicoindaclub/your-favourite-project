import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const weatherApiKey = "0c183950ab4549da8fb115413220512";
  const imageApiKey =
    "563492ad6f917000010000019fe6895bc4de4b2f816d02c64408d69f";

  const [searchOutput, setSearchOutput] = useState("");
  const [weatherData, setWeatherData] = useState(undefined);
  const [imageData, setImageData] = useState(undefined);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${searchOutput}`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch :(");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [searchOutput]);

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
      <div className="container">
        <Header setSearchOutput={setSearchOutput} />
        <Main weatherData={weatherData} imageData={imageData} />
      </div>
    </>
  );
}

export default App;
