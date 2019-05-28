import { HIDE_SIDEBAR } from "../constants/action-types";
import { SHOW_SIDEBAR } from "../constants/action-types";
export const hideSidebar = () => {
  return {
    type: HIDE_SIDEBAR
  };
};

export const showSidebar = () => {
  return {
    type: SHOW_SIDEBAR
  };
};
