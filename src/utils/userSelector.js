import { createSelector } from "reselect";

const selectUser = state => state.usersData;

export const selectUserItems = createSelector([selectUser], cart => cart.users);

export const userTotalItems = createSelector(
  [selectUserItems],
  users => users.length
);

export const userApprovedItems = createSelector(
  [selectUserItems],
  users => users.filter(user => user.isApproved).length
);
