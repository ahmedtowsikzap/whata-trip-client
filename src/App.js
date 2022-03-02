import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./components/Allservices/Pagae/Pages";
import Home from "./components/Home/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/spots" element={<Pages />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
