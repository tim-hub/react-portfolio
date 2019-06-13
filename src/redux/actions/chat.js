import { UPDATE_CHATTING, QUESTION, ANSWER } from "../constants/action-types";

export const updateChattingStatus = status => {
  return {
    type: UPDATE_CHATTING,
    status: status
  };
};

export const ask = question => {
  return {
    type: QUESTION,
    question: question
  };
};
export const answer = answer => {
  return {
    type: ANSWER,
    question: answer
  };
};
