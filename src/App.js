import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allservices from "./components/Allservices/Allservices";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Allservices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
