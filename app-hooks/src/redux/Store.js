import { legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/CombineReducers";

const middleware = [thunk , logger ];

const store = legacy_createStore(rootReducer,applyMiddleware(...middleware));

export default store;

