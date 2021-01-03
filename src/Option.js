import React from "react";
import "./Option.css";

function Option({ Icon, title }) {
  return (
    <div className="option">
      <Icon />
      <p>{title}</p>
    </div>
  );
}

export default Option;
