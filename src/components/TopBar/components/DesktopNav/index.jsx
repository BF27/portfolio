import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <nav className="desktop-navigation w-3/6 hidden md:flex items-center content-center border-x-4 border-blue text-3xl">
      <ul className="navigation-list w-full font-fontHeading flex justify-evenly">
        <li className="navigation-list-item"><Link to="/about">About</Link></li>
        <li className="navigation-list-item"><Link to="/projects">Projects</Link></li>
        <li className="navigation-list-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
