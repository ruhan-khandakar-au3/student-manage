import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleSidebar } from "../../redux/actions/toggleAction";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="teal lighten-2 d-between">
      <span
        className="material-icons dl-none px-1 c-pointer"
        onClick={toggleSidebar}
      >
        format_align_center
      </span>
      <div className="nav-wrapper d-flex-center flex-g-1 ">
        <h5 className="text-center m-0">Student Management</h5>
      </div>
    </nav>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

export default connect(null, { toggleSidebar })(Header);
