import { UPDATE_CHATTING } from "../constants/action-types";

const initialState = {
  status: "chatting"
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHATTING:
      return Object.assign({}, state, {
        status: action.status
      });
    default:
      return state;
  }
};

export default chatReducer;
