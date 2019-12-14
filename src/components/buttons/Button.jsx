import React from "react";
import PropTypes from "prop-types";

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
Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  clsNames: PropTypes.string.isRequired,
  iconTxt: PropTypes.string.isRequired
};
export default Button;
