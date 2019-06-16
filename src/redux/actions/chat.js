import { UPDATE_CHATTING, QUESTION, ANSWER } from "../constants/action-types";

export const updateChattingStatus = status => {
  return {
    type: UPDATE_CHATTING,
    status: status
  };
};

export const ask = (question, fromWhom = 1) => {
  return {
    type: QUESTION,
    question: question,
    from: fromWhom
  };
};
export const answer = (answer, fromWhom = 0) => {
  return {
    type: ANSWER,
    answer: answer,
    from: fromWhom
  };
};
