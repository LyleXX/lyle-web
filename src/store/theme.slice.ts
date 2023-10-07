import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/index";

interface State {
  theme: "light" | "dark";
}
const localTheme = localStorage.getItem('theme') as State['theme']
const initialState: State = {
  theme: localTheme ? localTheme : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state,) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
  },
});


export const selectTheme = (state: RootState) => state.theme.theme;

export const themeActions = themeSlice.actions


