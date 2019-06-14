import {
  HIDE_SIDEBAR,
  TOGGLE_SIDEBAR,
  SHOW_SIDEBAR,
  DEVICE_SIZE
} from "../constants/action-types";

const initialState = {
  showBar: true,
  title: "Portfolio",
  size: "medium"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_SIDEBAR:
      return Object.assign({}, state, {
        showBar: false
      });

    case SHOW_SIDEBAR:
      return Object.assign({}, state, {
        showBar: true
      });

    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        showBar: !action.showing
      });
    case DEVICE_SIZE:
      return Object.assign({}, state, {
        size: action.size
      });
    default:
      return state;
  }
};

export default rootReducer;
