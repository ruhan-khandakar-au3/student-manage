import { createSelector } from "reselect";

const selectUser = state => state.usersData;

export const selectUserItems = createSelector([selectUser], cart => cart.users);

export const selectFilterType = createSelector(
  [selectUser],
  cart => cart.filterType
);

export const userTotalItems = createSelector(
  [selectUserItems],
  users => users.length
);

export const userApprovedItemsCount = createSelector(
  [selectUserItems],
  users => users.filter(user => user.isApproved).length
);

export const userMaleItems = createSelector([selectUserItems], users =>
  users.filter(user => user.gender === "male")
);

export const userFemaleItems = createSelector([selectUserItems], users =>
  users.filter(user => user.gender === "female")
);
