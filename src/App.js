import {
  Routes,
  Route,
  Navigate,
  HashRouter as Router,
} from "react-router-dom";
import Navigation from "./common/navigation";
import GamesPage from "./features/gamesPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<GamesPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
