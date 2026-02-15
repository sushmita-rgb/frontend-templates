import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import LoginPage from "./login.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import MainPage from "./navPage.jsx";
import Premium from "./premiumPage.jsx";
import HeroPage from "./components/HeroPage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Footer from "./Footer/Footer.jsx";
import Doctors from "./components/Doctors/Doctors.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";
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
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ===== ADMIN DASHBOARD (NO LAYOUT) ===== */}
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}
