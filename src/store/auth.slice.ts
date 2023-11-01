import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/index";

interface State {
  token: string
}
const localToken = sessionStorage.getItem('token') as State['token']
const initialState: State = {
  token: localToken ? localToken : "",
};

export const authSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      state.token = payload
      localStorage.setItem("theme", state.token);
    },
  },
});


export const token = (state: RootState) => state.auth.token;

export const authActions = authSlice.actions


