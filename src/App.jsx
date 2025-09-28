import { Routes, Route } from "react-router";
import HomePage from "./pages/home";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="about"
        element={<h1>About Page</h1>}
      />
      <Route
        path="*"
        element={<h1>Page couldn't be found'</h1>}
      />
    </Routes>
  );
}
