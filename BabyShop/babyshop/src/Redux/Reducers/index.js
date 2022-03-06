import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  rooot: "loginData",
  storage,
};
const reducer = combineReducers({});
const persistReducer = persistReducer(persistConfig, reducer);
export default persistReducer;
