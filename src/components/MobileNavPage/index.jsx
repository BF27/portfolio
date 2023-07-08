import { Link } from "react-router-dom";
import { useContext } from "react";
import {toggleMobileNavContext} from "../../contexts/toggleMobileNavContext";

const MobileNavPage = () => {

  const toggleMobileNav = useContext(toggleMobileNavContext);
  return (
    <nav className="h-full flex items-center justify-center">
      <ul className="flex flex-col items-center justify-center gap-6">
        <li>
          <Link
            to="/about"
            className="text-4xl text-blue font-fontHeading uppercase"
            onClick={toggleMobileNav}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-4xl text-blue font-fontHeading uppercase"
            onClick={toggleMobileNav}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="text-4xl text-blue font-fontHeading uppercase"
            onClick={toggleMobileNav}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavPage;
