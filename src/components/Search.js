import React from "react";

function Search(props) {
  return (
    <div>
      <input placeholder={props.name}></input>
      <input type="submit"></input>
    </div>
  );
}

export default Search;
