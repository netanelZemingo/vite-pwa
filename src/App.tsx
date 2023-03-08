import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import "./App.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Navigate to={"/1"} />} />
            <Route path="/1" element={<Page1 />} />
            <Route path="/2" element={<Page2 />} />
          </Routes>
          <div className="nav">
            <NavBar />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
