import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "store/index";

interface State {
  theme: "light" | "dark";
}

const initialState: State = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state,) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});


export const selectTheme = (state: RootState) => state.theme.theme;

export const themeActions = themeSlice.actions


