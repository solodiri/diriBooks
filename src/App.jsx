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
import MobileMenu from "./componemts/mobileMenu/MobileMenu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "./pages/books/BookPage";
import NotFound from "./pages/notfound/NotFound";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const MenuSignToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          MenuSignToggle={MenuSignToggle}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookPage" element={<BookPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/detailPage/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {showMobileMenu && (
          <MobileMenu
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
