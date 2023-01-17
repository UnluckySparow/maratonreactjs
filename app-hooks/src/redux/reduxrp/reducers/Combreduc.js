import { combineReducers } from "redux";
import contactreduc from "./contactreduc";

const  reduccombine = combineReducers({
    contacts:contactreduc
})

export  default reduccombine;  