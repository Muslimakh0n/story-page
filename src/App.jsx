import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MensPage from "./pages/MensPage";
import Header from "./components/Header";
import WomensPage from "./pages/WomensPage";
import ChildPage from "./pages/ChildPage";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="holder">
          <Routes>
            <Route path="/" element={<MensPage />} />
            <Route path="/women" element={<WomensPage />} />
            <Route path="/child" element={<ChildPage />} />
            <Route path="/singlepage" element={<SinglePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
