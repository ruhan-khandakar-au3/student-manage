import { TOGGLE_SIDEBAR } from "../actions/actionTypes";

const INITIAL_STATE = {
  hidden: true
};

const toggleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default toggleReducer;
