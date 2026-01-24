import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import LoginPage from "./login.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";

function Home() {
  return <h1 className="text-center text-3xl mt-10">Home Page</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} /> {/* "/" */}
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}
