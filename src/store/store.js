import { combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";

const rootReducers = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
});

export const store = createStore(rootReducers);
