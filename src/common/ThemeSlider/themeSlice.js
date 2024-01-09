import { createSlice } from "@reduxjs/toolkit";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { themeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isTheme: themeFromLocalStorage(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.isTheme = !state.isTheme;
      saveThemeInLocalStorage(state.isTheme);
    },
  },
});

export const selectThemeState = (state) => state.theme;
export const { toggleTheme } = themeSlice.actions;
export const selectLightTheme = (state) => selectThemeState(state).isTheme;
export default themeSlice.reducer;
