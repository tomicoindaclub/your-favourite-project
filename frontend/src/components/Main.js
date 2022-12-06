import React from "react";

function Main({ weatherData }) {
  return (
    <>
      <div>
        <p>{weatherData.current.temp_c}</p>
      </div>
      {/* <div>{imageData}</div> */}
    </>
  );
}

export default Main;
