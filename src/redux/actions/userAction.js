import { CREATE_NEW_LEAD, TOGGLE_APPROVED } from "./actionTypes";

export const createNewLead = () => async dispatch => {
  const response = await fetch(`https://randomuser.me/api/`);
  let data = await response.json();
  data = data.results[0];
  const {
    gender,
    name: { first, last },
    email,
    phone,
    picture: { large },
    login: { uuid },
    dob: { age }
  } = data;
  const user = {
    id: uuid,
    name: `${first} ${last}`,
    email,
    gender,
    age,
    phone,
    imageUrl: large,
    isApproved: false
  };
  dispatch({
    type: CREATE_NEW_LEAD,
    payload: user
  });
};

export const toggleApproved = userId => ({
  type: TOGGLE_APPROVED,
  payload: userId
});
