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
      id: "23f6e87e-9d2d-483a-8d22-1253631f9b43",
      name: "Begüm Bakırcıoğlu",
      email: "begum.bakircioglu@example.com",
      gender: "female",
      age: 57,
      phone: "(209)-572-1396",
      imageUrl: "https://randomuser.me/api/portraits/women/37.jpg",
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
      console.log("Yes I m changing");
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
};

export default userReducer;
