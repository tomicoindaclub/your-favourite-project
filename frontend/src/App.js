import "./App.css";
import React, { useEffect, useState } from "react";
import Main from "./components/Main";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [cityName, setCityName] = useState("");

  const handleClick = () => {
    let cityName = inputCity;
    setCityName(cityName);
  };

  return (
    <>
      <div className="App">
        <input
          type="text"
          name="filter"
          id="filter"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button onClick={handleClick}>KERESS</button>
        <Main cityName={cityName} />
      </div>
    </>
  );
}

export default App;
