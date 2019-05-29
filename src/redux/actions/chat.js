import { UPDATE_CHATTING } from "../constants/action-types";

export const updateChattingStatus = status => {
  return {
    type: UPDATE_CHATTING,
    status: status
  };
};
