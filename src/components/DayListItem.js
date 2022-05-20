import React from "react";

return (
  <li
    className={dayClass}
    onClick={() => props.setDay(props.name)}
    selected={props.selected}
  >
    <h2 className="text--regular">{props.name}</h2>
    <h3 className="text--light">{formatSpots()}</h3>
  </li>
);