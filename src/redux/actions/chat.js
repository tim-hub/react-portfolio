import { UPDATE_CHATTING, QUESTION, ANSWER } from "../constants/action-types";

export const updateChattingStatus = status => {
  return {
    type: UPDATE_CHATTING,
    status: status
  };
};

export const ask = questions => {
  return {
    type: QUESTION,
    questions: questions
  };
};
export const answer = answers => {
  return {
    type: ANSWER,
    answers: answers
  };
};
