import {
  HIDE_SIDEBAR,
  SHOW_SIDEBAR,
  TOGGLE_SIDEBAR,
  DEVICE_SIZE
} from "../constants/action-types";

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

export const toggleSidebar = showing => {
  return {
    type: TOGGLE_SIDEBAR,
    showing: showing
  };
};

export const updateDeviceSize = size =>{
  return {
    type: DEVICE_SIZE,
    size: size
  }
}
