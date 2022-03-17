import { createStore, combineReducers } from "redux";

// Reducers
import themeReducer from "./reducers/themeReducer";

const reducers = combineReducers({
  theme: themeReducer
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
