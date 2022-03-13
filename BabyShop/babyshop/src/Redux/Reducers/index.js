import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userDetailsReducer from "./userDetails.reducer";
const persistConfig = {
  key: "user",
  storage,
};
const reducer = combineReducers({
  userDetailsReducer,
});

const persistreducer = persistReducer(persistConfig, reducer);
export default persistreducer;
