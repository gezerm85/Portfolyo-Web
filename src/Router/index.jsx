import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Router;
