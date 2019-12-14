import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import UserCard from "../user-card/UserCard";
import { usersFilterdItems } from "../../utils/userSelector";

const Users = ({ users }) => (
  <Fragment>
    {users.map(user => (
      <div key={user.id} className="col s12 m6 l4">
        <UserCard user={user} />
      </div>
    ))}
  </Fragment>
);

const mapStateToProps = createStructuredSelector({
  users: usersFilterdItems
});

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Users);
