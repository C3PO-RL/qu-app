import { combineReducers } from "redux";
import planetSlice from "../slices/planetSlice";

const rootReducer = combineReducers({
  planetSlice,
});

export default rootReducer;
