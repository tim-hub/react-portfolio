import {
  HIDE_SIDEBAR,
  TOGGLE_SIDEBAR,
  SHOW_SIDEBAR
} from "../constants/action-types";

const initialState = {
  showBar: true,
  title: "Portfolio"
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
      console.log("hide it");
      return Object.assign({}, state, {
        showBar: !state.showBar
      });
    default:
      return state;
  }
};

export default rootReducer;
