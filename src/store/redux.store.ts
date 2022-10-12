import { type Dependencies } from "./redux.dependencies";
import {
  Action,
  AnyAction,
  configureStore,
  Store,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { reducers } from "@store/redux.reducers";
import type { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { type AppState } from "@state";

const isProduction = process.env.NODE_ENV === "production";

export const initializeReduxStore = (dependencies: Partial<Dependencies>) => {
  return configureStore({
    reducer: reducers,
    devTools: !isProduction,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<AppState>) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
  });
};

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  Dependencies,
  AnyAction
>;

export type AppDispatch = ThunkDispatch<AppState, Dependencies, Action>;
