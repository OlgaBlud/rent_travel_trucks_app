import { Route, Routes } from "react-router";
import "./App.css";
import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import CampersCatalogPage from "../../pages/CampersCatalogPage/CampersCatalogPage";
import CamperDetailsPage from "../../pages/CamperDetailsPage/CamperDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersCatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
