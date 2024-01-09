import {
  Routes,
  Route,
  Navigate,
  HashRouter as Router,
} from "react-router-dom";
import Navigation from "./common/navigation";
import GamesPage from "./features/gamesPage";
import Description from "./features/description";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectLightTheme } from "./common/ThemeSlider/themeSlice";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const isLightTheme = useSelector(selectLightTheme);

  return (
    <ThemeProvider theme={isLightTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<GamesPage />} />
          <Route path="/Description/:id" element={<Description />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
