import "./App.css";
import React, { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [cityName, setCityName] = useState("");

  const getCityName = (input) => {
    let cityName = input;
    setCityName(cityName);
  };

  return (
    <>
      <div className="app-container">
        <Header getCityName={getCityName} />
        <Main cityName={cityName} />
      </div>
    </>
  );
}

export default App;
