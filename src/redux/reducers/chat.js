import {
  UPDATE_CHATTING,
  ANSWER,
  QUESTION,
  ANSWERING
} from "../constants/action-types";
const data = require("../../data/chattingdata.json"); // use local data as initial state

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
          ...state.questions.slice(0, state.questions.length - 1),
          {
            id: state.questions.length,
            from: action.from,
            content: action.answer
          }
        ],
        status: 0
      });
    case ANSWERING:
      return Object.assign({}, state, {
        questions: [
          ...state.questions,
          {
            id: state.questions.length,
            from: 0,
            waiting: true,
            content: ""
          }
        ],
        status: 1
      });
    default:
      return state;
  }
};

export default chatReducer;
