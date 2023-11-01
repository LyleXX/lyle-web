import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./theme.slice";
import { authSlice } from './auth.slice'

export const rootReducer = {
  theme: themeSlice.reducer,
  auth: authSlice.reducer
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;