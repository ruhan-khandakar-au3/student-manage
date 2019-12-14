import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import UserCard from "../user-card/UserCard";
import {
  selectUserItems,
  userMaleItems,
  userFemaleItems,
  selectFilterType
} from "../../utils/userSelector";

const Users = ({ users, maleUsers, femaleUsers, filterType }) => {
  let filteredUsers;
  if (filterType === "All") {
    filteredUsers = users;
  }
  if (filterType === "males") {
    filteredUsers = maleUsers;
  }
  if (filterType === "females") {
    filteredUsers = femaleUsers;
  }
  return (
    <Fragment>
      {filteredUsers.map(user => (
        <div key={user.id} className="col s4">
          <UserCard user={user} />
        </div>
      ))}
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUserItems,
  maleUsers: userMaleItems,
  femaleUsers: userFemaleItems,
  filterType: selectFilterType
});

export default connect(mapStateToProps)(Users);
