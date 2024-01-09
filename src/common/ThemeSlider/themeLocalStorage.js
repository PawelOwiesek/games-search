const saveThemeInLocalStorage = (isTheme) => {
  localStorage.setItem("theme", JSON.stringify(isTheme));
};

const themeFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("theme"));
};
export { saveThemeInLocalStorage, themeFromLocalStorage };
