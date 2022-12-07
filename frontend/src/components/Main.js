import React from "react";

function Main({ weatherData, imageData }) {
  return (
    <>
      {weatherData && imageData && imageData.photos.length > 0 && (
        <div className="block-container">
          <div className="block">
            <div className="city-country">
              <h2 className="city-name">{weatherData.location.name}</h2>
              <p className="country-name">{weatherData.location.country}</p>
            </div>
            <div className="weather">
              <div className="widget">
                <img
                  className="city-img"
                  src={imageData.photos[0].src.original}
                  alt={weatherData.location.name}
                />
                <div className="widget-info">
                  <div className="temp">
                    <p className="temp-data">{weatherData.current.temp_c}</p>
                    <p className="temp-unit"> °C</p>
                  </div>
                  <div className="icon">
                    <img
                      src={`https:${weatherData.current.condition.icon}`}
                      alt="Weather Status Icon"
                    />
                  </div>
                </div>
              </div>
              <div className="info">
                <p className="info-title">Wind:</p>
                <p className="wind">{weatherData.current.wind_kph} KM/H</p>
                <hr />
                <p className="info-title">Humidity:</p>
                <p className="humidity">{weatherData.current.humidity}%</p>
                <hr />
                <p className="info-title">Air pressure</p>
                <p className="pressure">{weatherData.current.pressure_in}</p>
                <hr />
                <p className="info-title">UV:</p>
                <p className="uv">{weatherData.current.uv}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
