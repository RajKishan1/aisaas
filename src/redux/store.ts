// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// const rootReducer = combineReducers({});
// export function makeStore() {
//   return configureStore({
//     reducer: rootReducer,
//   });
// }
// export const store = makeStore();
import {
  combineReducers,
  configureStore,
  Middleware,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { slices } from "./slices";
import { apis } from "./api";
import middleware from "@/middleware";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  ...slices,
  ...apis.reduce((acc, api) => {
    acc[api.reducerPath] = api.reducer;
    return acc;
  }, {} as ReducersMapObject),
});
export function makeStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) =>
      gDM().concat(...apis.map((a) => a.middleware as Middleware)),
    preloadedState,
    devTools: process.env.NODE_ENV! == "production",
  });
}
export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
