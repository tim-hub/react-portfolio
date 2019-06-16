import { UPDATE_CHATTING, ANSWER, QUESTION } from "../constants/action-types";
const data = require("../../data/data.json"); // use local data as initial state

const initialState = data["init"]["chat"];

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHATTING:
      return Object.assign({}, state, {
        status: action.status
      });
    case QUESTION:
      return Object.assign({}, state, {
        questions: [
          ...state.questions,
          {
            id: state.questions.length,
            from: action.from,
            content: action.question
          }
        ]
      });
    case ANSWER:
      return Object.assign({}, state, {
        questions: [
          ...state.questions,
          {
            id: state.questions.length,
            from: action.from,
            content: action.answer
          }
        ]
      });
    default:
      return state;
  }
};

export default chatReducer;
