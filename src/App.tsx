import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { NetworkOnly } from "./pages/NetworkOnly";
import { CacheFirst } from "./pages/CacheFirst";
import "./App.css";
import ReloadPrompt from "./Components/ReloadPrompt";
import StaleWhileRevalidate from "./pages/StaleWhileRevalidate";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Navigate to={"/1"} />} />
            <Route path="/1" element={<NetworkOnly />} />
            <Route path="/2" element={<CacheFirst />} />
            <Route path="/3" element={<StaleWhileRevalidate />} />
          </Routes>
          <div className="nav">
            <ReloadPrompt />
            <NavBar />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
