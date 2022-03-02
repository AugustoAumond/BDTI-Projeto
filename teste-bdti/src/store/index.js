import { createStore, combineReducers } from "redux";
import listReducer from "./lists/list.reducer";
import validatorReducer from "./validator/validator.reducer";

const rootReducer = combineReducers({
    list: listReducer,
    validator: validatorReducer
});

const store = createStore(rootReducer)

export default store;