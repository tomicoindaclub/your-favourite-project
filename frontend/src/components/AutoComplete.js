import React from "react";

function AutoComplete({ name, setSearchOutput, setAutoComplete }) {
  return (
    <div>
      <option
        className="Option"
        value={name}
        onClick={(e) => {
          setSearchOutput(e.target.value);
          setAutoComplete([]);
        }}
      >
        {name}
      </option>
    </div>
  );
}

export default AutoComplete;
