import { Routes, Route } from "react-router";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Header from "./components/Header";
import NotFoundPage from "./pages/not-found";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
}
