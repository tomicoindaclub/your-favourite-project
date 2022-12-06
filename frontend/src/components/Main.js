import React from "react";

function Main({ weatherData, imageData }) {
  return (
    <>
      {weatherData && (
        <div>
          <h1>{weatherData.location.name}</h1>

          <h2>{weatherData.location.country}</h2>

          <h1>Temp: {weatherData.current.temp_c} °c</h1>

          <h1>Wind: {weatherData.current.wind_kph} KM/H</h1>

          <h1>Humidity: {weatherData.current.humidity}%</h1>
        </div>
      )}
      {imageData && imageData.photos.length > 0 && (
        <div>
          <img
            src={imageData.photos[0].src.original}
            alt={weatherData.location.name}
          />
        </div>
      )}
    </>
  );
}

export default Main;
