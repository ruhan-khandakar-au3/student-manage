import {
  CREATE_NEW_LEAD,
  TOGGLE_APPROVED,
  CHANGE_FILTER_TYPE,
  CHANGE_LOADING_STATUS
} from "../actions/actionTypes";

const INITIAL_STATE = {
  users: [
    {
      id: "3829a605-a571-4545-a9bf-82e9ffe70b04",
      name: "Eetu Leppanen",
      email: "eetu.leppanen@example.com",
      gender: "male",
      age: 66,
      phone: "09-984-070",
      imageUrl: "https://randomuser.me/api/portraits/men/60.jpg",
      isApproved: false
    },
    {
      id: "fd4735df-74fc-4afb-95f5-679d7a656cc6",
      name: "Zoraide Ribeiro",
      email: "zoraide.ribeiro@example.com",
      gender: "female",
      age: 43,
      phone: "(64) 3477-4515",
      imageUrl: "https://randomuser.me/api/portraits/women/46.jpg",
      isApproved: true
    }
  ],
  filterType: "All",
  loading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_NEW_LEAD:
      return {
        ...state,
        users: [payload, ...state.users]
      };
    case TOGGLE_APPROVED:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === payload ? { ...user, isApproved: !user.isApproved } : user
        )
      };
    case CHANGE_FILTER_TYPE:
      return {
        ...state,
        filterType: payload
      };
    case CHANGE_LOADING_STATUS:
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
};

export default userReducer;
