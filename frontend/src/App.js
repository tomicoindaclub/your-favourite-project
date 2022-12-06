import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const apiKey = "0c183950ab4549da8fb115413220512";
  // const imageApiKey =
  //   "563492ad6f917000010000019fe6895bc4de4b2f816d02c64408d69f";

  const [searchInput, setSearchInput] = useState("");
  const [weatherhData, setWeatherData] = useState([]);
  // const [imageData, setImageData] = useState([]);

  const getSearchInput = (input) => {
    let searchInput = input;
    setSearchInput(searchInput);
    console.log(searchInput);
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
        console.log(weatherhData);
      });

    // fetch(`https://api.pexels.com/v1/search?query=${searchInput}&per_page=1`, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     Authorization: `${imageApiKey}`,
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setImageData(data);
    //     let imgURL = imageData.photos[0].src.original;
    //     console.log(imageData)
    //     console.log(imgURL);
    //   });
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
