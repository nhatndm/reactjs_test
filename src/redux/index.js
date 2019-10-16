import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import ImageReducer from "./image/reducer";
import SystemReducer from "./system/reducer";
import { connectRouter, routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  image: ImageReducer,
  system: SystemReducer,
  router: connectRouter(history)
});

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk)
  )
);
