import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import gamesReducer from "./features/gamesPage/gamesSlice";
import themeReducer from "./common/ThemeSlider/themeSlice";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    games: gamesReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
