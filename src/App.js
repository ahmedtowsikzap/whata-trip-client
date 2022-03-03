import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./components/Allservices/Pagae/Pages";
import Home from "./components/Home/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import ManageService from "./components/ManageService/ManageService";
import NotFound from "./components/NotFound/NotFound";
import Placeorder from "./components/Placeorder/Placeorder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
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
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/placeorder/:placeorderId" element={<PrivateRoute><Placeorder /></PrivateRoute>} />
          <Route path="/Manageallbookings" element={<PrivateRoute><ManageService /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
