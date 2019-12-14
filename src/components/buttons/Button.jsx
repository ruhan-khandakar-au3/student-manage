import React from "react";

const Button = ({ btnText, clsNames, iconTxt, ...restProps }) => (
  <div>
    <button
      className={`waves-effect waves-light btn btn-block d-flex-between ${clsNames}`}
      {...restProps}
    >
      {iconTxt && <i className="material-icons">{iconTxt}</i>}
      <span>{btnText}</span>
    </button>
  </div>
);
export default Button;
