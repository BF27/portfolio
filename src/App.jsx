import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ActualPageContext } from "./contexts/ActualPageContext";
import {
  toggleMobileNavContext,
  mobileNavContext,
} from "./contexts/toggleMobileNavContext";
import TopBar from "./components/TopBar";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./styles/App.css";
import MobileNavPage from "./components/MobileNavPage";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("welcome");
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const changePage = (page) => {
    setPage(page);
  };
  return (
    <>
      <mobileNavContext.Provider value={mobileNav}>
        <toggleMobileNavContext.Provider value={toggleMobileNav}>
          <TopBar />
          <ActualPageContext.Provider value={page}>
            {mobileNav ? (
              <MobileNavPage />
            ) : (
              <Routes>
                <Route path="/" element={<Welcome changePage={changePage} />} />
                <Route
                  path="/about"
                  element={<About changePage={changePage} />}
                />
                <Route
                  path="/projects"
                  element={<Projects changePage={changePage} />}
                />
                <Route
                  path="/contact"
                  element={<Contact changePage={changePage} />}
                />
              </Routes>
            )}
          </ActualPageContext.Provider>
          <Footer />
        </toggleMobileNavContext.Provider>
      </mobileNavContext.Provider>
    </>
  );
}

export default App;
