import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import UserCard from "../user-card/UserCard";
import { selectUserItems } from "../../utils/userSelector";

const Users = ({ users }) => (
  <Fragment>
    {users.map(user => (
      <div key={user.id} className="col s4">
        <UserCard user={user} />
      </div>
    ))}
  </Fragment>
);

const mapStateToProps = createStructuredSelector({
  users: selectUserItems
});

export default connect(mapStateToProps)(Users);
