import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { slices } from "./slice";
import { apis } from "./api";

import middleware from "@/middleware";
export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
  ...slices,
  ...apis.reduce((acc, api) => {
    acc[api.reducerPath] = api.reducer;
    return acc;
  }, {} as ReducerMapObject),
});
export function makeStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) =>
      gDM().concat(
        ...apis.map((a) => {
          a.middleware as Middleware;
        })
      ),
  });
}
export const store = makeStore();
