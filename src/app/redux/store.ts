import { combineReducers, configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({});
export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
export const store = makeStore();
