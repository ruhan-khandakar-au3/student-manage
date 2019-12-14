import { createSelector } from "reselect";

const selectUser = state => state.usersData;

export const selectUserItems = createSelector([selectUser], cart => cart.users);
