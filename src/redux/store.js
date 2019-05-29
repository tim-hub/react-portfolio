import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/index";
import chatReducer from "./reducers/chat";

const reducers = combineReducers({
  root: rootReducer,
  chat: chatReducer
});
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 20
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const store = createStore(reducers, enhancer);

export default store;
