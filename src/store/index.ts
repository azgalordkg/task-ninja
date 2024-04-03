import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { queryMiddleware, reducer } from "./apis";
import { rtkQueryErrorLogger } from "./middlewares";

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger, ...queryMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
