import { all } from "redux-saga/effects";
import { saveThemeSaga } from "./common/ThemeSlider/themeSaga";

export function* rootSaga() {
  yield all([saveThemeSaga()]);
}
