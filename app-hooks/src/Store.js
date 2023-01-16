import { legacy_createStore,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
const middleware = [thunk , logger ];
function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
  }

const store = legacy_createStore(counterReducer,applyMiddleware(...middleware));

export default store;

