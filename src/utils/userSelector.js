import { createSelector } from "reselect";

const selectUser = state => state.usersData;

export const selectUserItems = createSelector(
  [selectUser],
  store => store.users
);

export const selectFilterType = createSelector(
  [selectUser],
  store => store.filterType
);

export const selectLoading = createSelector(
  [selectUser],
  store => store.loading
);

export const usersFilterdItems = createSelector(
  [selectUserItems, selectFilterType],
  (users, type) =>
    users.filter(user => {
      if (type === "males") return user.gender === "male";
      else if (type === "females") return user.gender === "female";
      return users;
    })
);

export const usersTotalItemsCount = createSelector(
  [usersFilterdItems],
  users => users.length
);

export const usersApprovedCount = createSelector(
  [usersFilterdItems],
  users => users.filter(user => user.isApproved).length
);
