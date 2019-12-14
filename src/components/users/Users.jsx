import React, { Fragment } from "react";
import { connect } from "react-redux";

import UserCard from "../user-card/UserCard";

const Users = ({ users }) => (
  <Fragment>
    {users.map(user => (
      <div key={user.id} className="col s4">
        <UserCard user={user} />
      </div>
    ))}
  </Fragment>
);

const mapStateToProps = state => ({
  users: state.usersData.users
});

export default connect(mapStateToProps)(Users);
