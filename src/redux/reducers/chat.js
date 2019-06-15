import { UPDATE_CHATTING, ANSWER, QUESTION } from "../constants/action-types";
const data = require("../../data/data.json"); // use local data as initial state

const initialState = data["init"];

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHATTING:
      return Object.assign({}, state, {
        status: action.status
      });
    case QUESTION:
      return Object.assign({}, state, {
        questions: action.questions
      });
    case ANSWER:
      return Object.assign({}, state, {
        answers: action.answers
      });
    default:
      return state;
  }
};

export default chatReducer;
