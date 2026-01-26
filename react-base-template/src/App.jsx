import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import LoginPage from "./login.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import MainPage from "./navPage.jsx"; // Navigation Table
import Premium from "./premiumPage.jsx";
import HeroPage from "./components/HeroPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route path="hero" element={<HeroPage />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="premium" element={<Premium />} />
      </Route>
    </Routes>
  );
}
