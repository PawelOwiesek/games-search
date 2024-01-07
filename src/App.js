import {
  Routes,
  Route,
  Navigate,
  HashRouter as Router,
} from "react-router-dom";
import Navigation from "./common/navigation";
import GamesPage from "./features/gamesPage";
import Description from "./features/description";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<GamesPage />} />
        <Route path="/Description/:id" element={<Description />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
