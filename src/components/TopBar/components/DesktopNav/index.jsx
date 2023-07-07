const DesktopNav = () => {
  return (
    <nav className="desktop-navigation w-3/6 hidden md:flex items-center content-center border-x-4 border-blue text-3xl">
      <ul className="navigation-list w-full font-fontHeading flex justify-evenly">
        <li className="navigation-list-item">About</li>
        <li className="navigation-list-item">Project</li>
        <li className="navigation-list-item">Contact</li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
