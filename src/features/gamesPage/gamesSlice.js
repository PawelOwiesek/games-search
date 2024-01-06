import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
  },
  reducers: {
    fetchGames: ({ games }, { payload }) => {
      games.push(payload);
    },
  },
});

export const { fetchGames } = gameSlice.actions;
export const setGames = (state) => state.games;
export default gameSlice.reducer;
