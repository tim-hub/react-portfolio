import { HIDE_SIDEBAR, TOGGLE_SIDEBAR } from "../constants/action-types";
import { SHOW_SIDEBAR } from "../constants/action-types";

const initialState = {
  showSidebar: false,
  title: "Portfolio"
};

function rootReducer(state = initialState, action) {
  if (action.type === HIDE_SIDEBAR) {
    console.log("hide it");
    return Object.assign({}, state, {
      showSidebar: false
    });
  }
  if (action.type === SHOW_SIDEBAR) {
    return Object.assign({}, state, {
      showSidebar: true
    });
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return Object.assign({}, state, {
      showSidebar: !state.showSidebar
    });
  }

  return state;
}

export default rootReducer;
