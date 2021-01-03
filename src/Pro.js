import React from "react";
import "./Pro.css";
import Option from "./Option";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Pro() {
  return (
    <div className="pro">
      <div className="pro__title">
        <h3>Pro</h3>
        <h4>For agencies</h4>
      </div>
      <h1>$40</h1>
      <div className="pro__option">
        <Option Icon={CheckCircleIcon} title="3 users" />
        <Option Icon={CheckCircleIcon} title="Unlimited downloads" />
        <Option Icon={CheckCircleIcon} title="Fully editable files" />
        <Option Icon={CheckCircleIcon} title="Customs packs" />
      </div>
      <button className="pro__btn">Subscribe</button>
    </div>
  );
}

export default Pro;
