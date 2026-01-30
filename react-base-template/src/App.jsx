import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import LoginPage from "./login.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import MainPage from "./navPage.jsx";
import Premium from "./premiumPage.jsx";
import HeroPage from "./components/HeroPage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

export default function App() {
  return (
    <Routes>
      {/* ===== WEBSITE LAYOUT ===== */}
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="hero" element={<HeroPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="premium" element={<Premium />} />
      </Route>

      {/* ===== ADMIN DASHBOARD (NO LAYOUT) ===== */}
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}
