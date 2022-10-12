import { AnyAction } from "@reduxjs/toolkit";
import { type AppState } from "@state";

export type Reducer = (state: Partial<AppState>, action: AnyAction) => any;

export const reducers: Record<string, Reducer> = {
  // Add your reducers here
};
