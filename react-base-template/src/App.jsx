import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import LoginPage from "./login.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import MainPage from "./navPage.jsx";
import Premium from "./premiumPage.jsx";
import Steps from "./components/heroSteps.jsx";

function Home() {
  return <h1 className="text-center text-3xl mt-10">Home Page</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} /> {/* "/" */}
          <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutUs />} />
          <Route path="premium" element={<Premium />} />
        <Route path="steps" element={<Steps />} />
      </Route>
    </Routes>
  );
}
