import React from "react";

function AutoComplete({ name, setAutoComplete }) {
  return (
    <option
      value={name}
      onClick={(e) => {
        setAutoComplete([]);
      }}
    />
  );
}

export default AutoComplete;
