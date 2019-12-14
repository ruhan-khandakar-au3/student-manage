import { CREATE_NEW_LEAD } from "../actions/actionTypes";

const INITIAL_STATE = {
  users: [
    {
      name: "Joona Jarvinen",
      email: "joona.jarvinen@example.com",
      gender: "male",
      age: 60,
      phone: "08-589-656",
      imageUrl: "https://randomuser.me/api/portraits/med/men/32.jpg",
      id: "630817f1-a898-415a-8436-1445d8dea9a8",
      isApproved: true
    },
    {
      name: "Mahé Charles",
      email: "mahe.charles@example.com",
      gender: "male",
      age: 27,
      phone: "01-44-14-85-26",
      imageUrl: "https://randomuser.me/api/portraits/med/men/98.jpg",
      id: "92e12dbf-bdc8-455a-8a2e-7e6f06717d93",
      isApproved: false
    }
  ]
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_NEW_LEAD:
      return {
        ...state,
        users: [payload, ...state.users]
      };
    default:
      return state;
  }
};

export default userReducer;
