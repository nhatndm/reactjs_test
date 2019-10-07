import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import ImageReducer from "./image/reducer";
import SystemReducer from "./system/reducer";

const rootReducer = combineReducers({
  image: ImageReducer,
  system: SystemReducer
});

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
