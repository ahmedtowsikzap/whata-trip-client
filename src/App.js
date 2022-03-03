import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./components/Allservices/Pagae/Pages";
import Home from "./components/Home/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import NotFound from "./components/NotFound/NotFound";
import Placeorder from "./components/Placeorder/Placeorder";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/spots" element={<Pages />} />
          <Route path="/placeorder/:placeorderId" element={<Placeorder />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
