import { useContext } from "react";
import {
  mobileNavContext,
  toggleMobileNavContext,
} from "../../../../contexts/toggleMobileNavContext";
import "./MobileNav.css";

const MobileNav = () => {
  const toggleMobileNav = useContext(toggleMobileNavContext);
  const opened = useContext(mobileNavContext);
  const clicked = () => {
    toggleMobileNav();
  };

  return (
    <nav className="mobile-navigation w-1/4 px-6 flex justify-center items-center md:hidden">
      <div
        id="hamburger-icon"
        onClick={clicked}
        className={`w-full ${opened ? "open" : ""}`}
      >
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
