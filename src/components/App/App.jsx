import { Route, Routes } from "react-router";
import "./App.css";
import AppBar from "../AppBar/AppBar";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
// import HomePage from "../../pages/HomePage/HomePage";
// import CampersCatalogPage from "../../pages/CampersCatalogPage/CampersCatalogPage";
// import CamperDetailsPage from "../../pages/CamperDetailsPage/CamperDetailsPage";
// import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import CamperFeatures from "../CamperFeatures/CamperFeatures";
// import CamperReviews from "../CamperReviews/CamperReviews";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CampersCatalogPage = lazy(() =>
  import("../../pages/CampersCatalogPage/CampersCatalogPage")
);
const CamperDetailsPage = lazy(() =>
  import("../../pages/CamperDetailsPage/CamperDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const CamperFeatures = lazy(() => import("../CamperFeatures/CamperFeatures"));
const CamperReviews = lazy(() => import("../CamperReviews/CamperReviews"));

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersCatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route index element={<CamperFeatures />} />
            <Route path="features" element={<CamperFeatures />}></Route>
            <Route path="reviews" element={<CamperReviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
