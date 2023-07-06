import { useState } from "react";
import "./MobileNav.css";

const MobileNav = () => {
  const [opened, setOpened] = useState(false);
  const clicked = () => {
    setOpened(!opened)
  }

  return (
    <nav className="mobile-navigation w-1/4 px-6 flex justify-center items-center md:hidden">
      <div id="hamburger-icon" onClick={clicked} className={`w-full ${opened ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default MobileNav;
