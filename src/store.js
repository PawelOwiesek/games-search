import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./features/gamesPage/gamesSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
  },
});
