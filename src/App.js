import {
  Routes,
  Route,
  Navigate,
  HashRouter as Router,
} from "react-router-dom";
import Navigation from "./common/navigation";
import GamesPage from "./features/gamesPage";
import Something from "./features/something";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<GamesPage />} />
        <Route path="/something" element={<Something />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
