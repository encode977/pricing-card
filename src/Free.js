import React from "react";
import "./Free.css";
import Option from "./Option";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Free() {
  return (
    <div className="free">
      <div className="free__title">
        <h3>Free</h3>
        <h4>For freelancer</h4>
      </div>
      <h1>$0</h1>
      <div className="free__option">
        <Option Icon={CheckCircleIcon} title="1 users" />
        <Option Icon={CheckCircleIcon} title="10 downloads per month" />
        <Option Icon={CheckCircleIcon} title="24 hours support" />
        <Option Icon={CheckCircleIcon} title="Raster files" />
      </div>
      <button className="free__btn">Subscribe</button>
    </div>
  );
}

export default Free;
