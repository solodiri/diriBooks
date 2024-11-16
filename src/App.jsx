import { useState } from "react";
import "./App.css";
import AboutUs from "./componemts/about/AboutUs";
import Contact from "./componemts/contact/Contact";
import Footer from "./componemts/footer/Footer";
import NavBar from "./componemts/navbar/NavBar";
import ScrollToTop from "./componemts/scrollToTop";
import Services from "./componemts/services/Services";
import DetailPage from "./pages/detailPage/DetailPage";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import MobileMenu from "./componemts/mobileMenu/MobileMenu";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [changeMenuSign, setChangeMenuSign] = useState(true);

  const MenuSignToggle = () => {
    setShowMobileMenu(!showMobileMenu);
    setChangeMenuSign(!changeMenuSign);
  };
  return (
    <>
      <ScrollToTop />
      <NavBar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        MenuSignToggle={MenuSignToggle}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route />
        <Route path="/about" element={<AboutUs />} />
        <Route />
        <Route path="/contact" element={<Contact />} />
        <Route />
        <Route path="/services" element={<Services />} />
        <Route />
        <Route path="/about" element={<AboutUs />} />
        <Route />
        <Route path="/about" element={<AboutUs />} />
        <Route />
        <Route path="/detailPage/:id" element={<DetailPage />} />
        <Route />
      </Routes>
      {showMobileMenu ? (
        <MobileMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      ) : null}
      <Footer />
    </>
  );
}

export default App;
