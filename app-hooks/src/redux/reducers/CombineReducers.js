import { combineReducers } from "redux";
import Contactreducer from "./Contactreducer";

const rootReducer  = combineReducers({
        contact: Contactreducer
    }
)
export default rootReducer