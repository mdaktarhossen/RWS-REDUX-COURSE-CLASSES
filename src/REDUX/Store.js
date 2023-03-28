import { createStore } from "redux";
import counterReducer from "./CONUTER/counterReducer";

const store=createStore(counterReducer);
export default store;